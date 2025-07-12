import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemEntity } from '../orm/entities/ItemEntity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll(): Promise<ItemEntity[]> {
    return this.itemService.findAll();
  }
}
