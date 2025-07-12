import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm'

@Entity('play_history')
export class PlayHistoryEntity {
  @PrimaryColumn()
  txHash: string

  @Column('text')
  address: string

  @Column()
  level: number

  @Column()
  success: boolean
}
