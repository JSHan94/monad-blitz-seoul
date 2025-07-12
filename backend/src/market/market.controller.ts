import { Controller, Get } from '@nestjs/common'
import { MarketService } from './market.service'
import { MarketItemListResponse } from './market.interface'

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get('items')
  getMarketItems(): Promise<MarketItemListResponse>{
    return this.marketService.getMarketItems()
  }
}
