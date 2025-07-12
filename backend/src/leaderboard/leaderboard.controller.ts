import { Controller, Get } from '@nestjs/common'
import { LeaderboardService } from './leaderboard.service'
import { LeaderBoardListResponse } from './leaderboard.interface'

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  getLeaderboard(): Promise<LeaderBoardListResponse> {
    return this.leaderboardService.getLeaderboard()
  }
}
