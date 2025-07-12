import { Controller, Get, Param } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResponse } from './user.interface'


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':address')
  async getUser(
    @Param('address') address: string
  ): Promise<UserResponse> {
    return this.userService.getUser(address)
  }
}
