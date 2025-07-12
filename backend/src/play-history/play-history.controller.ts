import { Body, Controller, Post, Get } from '@nestjs/common'
import { PlayHistoryService } from './play-history.service'

@Controller('play-history')
export class PlayHistoryController {
  constructor(private readonly playHistoryService: PlayHistoryService) {}

  @Post()
  async createPlayHistory(
    @Body('address') address: string,
    @Body('level') level: number,
    @Body('success') success: boolean
  ) {
    return this.playHistoryService.createPlayHistory(address, level, success)
  }

  @Get()
  async getPlayHistory() {
    return this.playHistoryService.getPlayHistory()
  }
}
