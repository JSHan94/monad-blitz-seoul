import { Injectable } from '@nestjs/common'
import { getDB, UserEntity } from '../orm'
import { UserResponse } from './user.interface'

@Injectable()
export class UserService {
  async getUser(address: string): Promise<UserResponse> {
    const db = await getDB()
    const user = await db
      .getRepository(UserEntity)
      .findOne({ where: { address } })
    if (!user) {
      throw new Error(`User with address ${address} not found`)
    }
    return {
      address: user.address,
      points: user.points,
    }
  }
}
