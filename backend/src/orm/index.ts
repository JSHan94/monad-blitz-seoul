import 'reflect-metadata'
import { config as initConfig } from 'dotenv'
import { DataSource } from 'typeorm'
import { CamelToSnakeNamingStrategy } from './CamelToSnakeNamingStrategy'

import { PlayHistoryEntity, UserEntity, ItemEntity } from './entities'

export * from './entities'

initConfig()

const {
  TYPEORM_HOST,
  TYPEORM_HOST_RO,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING,
  TYPEORM_DATABASE,
} = process.env

export const staticOptions = {
  host: TYPEORM_HOST_RO ?? 'localhost',
  port: TYPEORM_PORT ? parseInt(TYPEORM_PORT) : 5432,
  username: TYPEORM_USERNAME ?? 'user',
  password: TYPEORM_PASSWORD ?? '',
  synchronize: TYPEORM_SYNCHRONIZE === 'true',
  logging: TYPEORM_LOGGING === 'true',
  namingStrategy: new CamelToSnakeNamingStrategy(),
}

let DB: DataSource

export async function initORM(): Promise<void> {
  DB = new DataSource({
    type: 'postgres',
    host: TYPEORM_HOST ?? 'localhost',
    port: TYPEORM_PORT ? parseInt(TYPEORM_PORT) : 5432,
    username: TYPEORM_USERNAME ?? 'user',
    password: TYPEORM_PASSWORD ?? '',
    database: TYPEORM_DATABASE,
    synchronize: TYPEORM_SYNCHRONIZE === 'true',
    logging: TYPEORM_LOGGING === 'true',
    namingStrategy: new CamelToSnakeNamingStrategy(),
    entities: [PlayHistoryEntity, UserEntity, ItemEntity],
  })
  await DB.initialize()
}

export async function getDB(): Promise<DataSource> {
  if (!DB) {
    await initORM()
  }
  return DB
}

export async function finalizeORM(): Promise<void> {
  await DB.destroy()
}
