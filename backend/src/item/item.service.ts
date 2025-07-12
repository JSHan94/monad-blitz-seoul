import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { ItemEntity } from '../orm/entities/ItemEntity';

@Injectable()
export class ItemService {
  constructor(
    // @InjectRepository(ItemEntity)
    // private itemRepository: Repository<ItemEntity>,
  ) {}

  async findAll(): Promise<ItemEntity[]> {
    // return this.itemRepository.find();
    const dummyItems: ItemEntity[] = [
      {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        owner: 'dummyOwner1',
        successCnt: 10,
        tryCnt: 15,
        price: 100,
      },
      {
        id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
        owner: 'dummyOwner2',
        successCnt: 20,
        tryCnt: 25,
        price: 200,
      },
    ];
    return dummyItems;
  }
}
