import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('')
  ping(): string {
    return 'OK'
  }

  @Get('health')
  health(): string {
    return 'OK'
  }
}
