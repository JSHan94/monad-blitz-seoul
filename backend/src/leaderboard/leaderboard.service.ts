import { Injectable } from '@nestjs/common'
import { LeaderBoardListResponse } from './leaderboard.interface'
// import { getDB, UserEntity } from '../orm'

@Injectable()
export class LeaderboardService {
  async getLeaderboard(): Promise<LeaderBoardListResponse> {
    // const db = await getDB()
    // const users = await db.getRepository(UserEntity).find()
    const dummyLeaderboard: LeaderBoardListResponse = {
      data: [
        { address: 'dummyAddress1', points: 1000 },
        { address: 'dummyAddress2', points: 900 },
        { address: 'dummyAddress3', points: 800 },
      ],
    };
    return dummyLeaderboard;
  }
}
