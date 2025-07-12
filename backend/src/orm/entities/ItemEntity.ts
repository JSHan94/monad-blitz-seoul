import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm'

@Entity('item')
export class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  owner: string

  @Column()
  successCnt: number

  @Column()
  tryCnt: number

  @Column()
  price: number
}
