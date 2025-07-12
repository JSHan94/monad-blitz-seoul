import { Injectable } from '@nestjs/common'
import { MarketItemListResponse } from './market.interface'
// import { getDB } from '../orm'
// import { ItemEntity } from 'src/orm/entities/ItemEntity'

@Injectable()
export class MarketService {
  async getMarketItems(): Promise<MarketItemListResponse> {
    // const db = await getDB()
    // const items = await db.getRepository(ItemEntity).find()
    const dummyMarketItems: MarketItemListResponse = {
      data: [
        {
          id: 'item1',
          owner: 'owner1',
          successCnt: 1,
          tryCnt: 1,
          price: 50,
        },
        {
          id: 'item2',
          owner: 'owner2',
          successCnt: 2,
          tryCnt: 2,
          price: 75,
        },
        {
          id: 'item3',
          owner: 'owner3',
          successCnt: 2,
          tryCnt: 4,
          price: 30,
        },
        {
          id: 'item4',
          owner: 'owner4',
          successCnt: 3,
          tryCnt: 3,
          price: 100,
        },
        {
          id: 'item5',
          owner: 'owner5',
          successCnt: 4,
          tryCnt: 4,
          price: 150,
        },
        {
          id: 'item6',
          owner: 'owner6',
          successCnt: 4,
          tryCnt: 4,
          price: 100,
        }
      ],
    };
    return dummyMarketItems;
  }
}
