/* eslint-disable */
import { LRUCache } from 'lru-cache'
import { Worker } from 'worker_threads'

interface KV<K, V> {
  key: K
  value: V
}

export class CacheStore<K extends {}, V extends {}> {
  private lruCache: LRUCache<string, V> // data cache
  private lruStaleCheckCache: LRUCache<string, boolean> // cache for the `allowStale` option
  private worker: Worker

  constructor(
    maxSize: number,
    ttl: number,
    private updateFunction: (key: K, ...args: any[]) => Promise<V>,
    private allowStale = false,
    workerPath?: string
  ) {
    if (allowStale) {
      // initialize data cache
      this.lruCache = new LRUCache({
        maxSize,
        sizeCalculation: this.sizeCalculation,
      })

      // initialize worker
      if (workerPath) {
        this.worker = new Worker(workerPath)
        this.startWorker(this.worker)
      }

      // initialize stale check cache
      this.lruStaleCheckCache = new LRUCache({
        ttl,
        ttlAutopurge: true,
      })
    } else {
      this.lruCache = new LRUCache({
        maxSize,
        ttl,
        sizeCalculation: this.sizeCalculation,
      })
    }
  }

  public async get(key: K, ...args: any[]): Promise<V> {
    const stringKey = JSON.stringify(key)
    const val = this.lruCache.get(stringKey)

    if (val === undefined) {
      const newVal = await this.updateFunction(key, ...args)
      this.set(stringKey, newVal)
      return newVal
    }

    if (
      this.allowStale &&
      this.lruStaleCheckCache.get(stringKey) === undefined
    ) {
      this.lruStaleCheckCache.set(stringKey, true) // set stale cache first to prevent redundant work
      if (this.worker !== undefined) {
        this.workerUpdate(key, ...args)
      } else {
        this.safeUpdate(key, ...args)
      }
    }

    return val
  }

  public has(key: K): boolean {
    return this.lruCache.has(JSON.stringify(key))
  }

  private safeUpdate(key: K, ...args: any[]) {
    const stringKey = JSON.stringify(key)
    this.updateFunction(key, ...args)
      .then((res) => {
        this.set(stringKey, res)
      })
      .catch(() => {
        if (this.lruStaleCheckCache) {
          this.lruStaleCheckCache.delete(stringKey) // need to reupdate
        }
      })
  }

  private workerUpdate(key: K, ...args: any[]) {
    this.worker.postMessage([key, ...args])
  }

  private startWorker(newWorker: Worker) {
    newWorker.on('message', (kv: KV<K, V>) => {
      this.set(JSON.stringify(kv), kv.value)
    })
    newWorker.on('error', (e) => {
      console.log(e)
    })
    newWorker.on('exit', () => {
      this.worker = new Worker(__filename)
      this.startWorker(this.worker)
    })
  }

  private set(key: string, value: V) {
    // Clear the cache entirely.
    if (this.lruCache.calculatedSize >= this.lruCache.maxSize) {
      this.lruCache.clear()
    }

    this.lruCache.set(key, value)
    if (this.lruStaleCheckCache) {
      this.lruStaleCheckCache.set(key, true)
    }
  }

  private sizeCalculation = (value: V): number => {
    return Buffer.from(JSON.stringify(value)).length
  }
}