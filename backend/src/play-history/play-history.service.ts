import { Injectable } from '@nestjs/common'
import { PlayHistoryEntity } from '../orm/entities/PlayHistoryEntity'

@Injectable()
export class PlayHistoryService {
  async createPlayHistory(
    address: string,
    level: number,
    success: boolean
  ): Promise<PlayHistoryEntity> {
    // const db = await getDB()
    const dummyPlayHistory = new PlayHistoryEntity()
    dummyPlayHistory.txHash = 'dummyTxHash-' + Date.now()
    dummyPlayHistory.address = address
    dummyPlayHistory.level = level
    dummyPlayHistory.success = success
    // return db.transaction(async (transactionalEntityManager) => {
    //   return await transactionalEntityManager.save(
    //     PlayHistoryEntity,
    //     playHistory
    //   )
    // })
    return dummyPlayHistory
  }

  async getPlayHistory(): Promise<PlayHistoryEntity[]> {
    // const db = await getDB()
    // return await db.getRepository(PlayHistoryEntity).find()
    const dummyPlayHistories: PlayHistoryEntity[] = [
      {
        txHash: 'dummyTxHash1',
        address: 'dummyAddress1',
        level: 1,
        success: true,

      },
      {
        txHash: 'dummyTxHash2',
        address: 'dummyAddress2',
        level: 2,
        success: false,
      },
    ];
    return dummyPlayHistories;
  }
}
