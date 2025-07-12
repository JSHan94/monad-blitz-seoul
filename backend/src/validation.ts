import { PipeTransform } from '@nestjs/common'
import { APIError } from './lib/error'

export class AllowedNumbers implements PipeTransform {
  private allowedNumbers: number[]
  private default: number
  constructor(allowedNumbers: number[], defaultValue: number) {
    this.allowedNumbers = allowedNumbers
    this.default = defaultValue
  }
  transform(value?: number | string) {
    if (!value) {
      value = this.default
    }
    if (!this.allowedNumbers.includes(Number(value))) {
      throw new APIError(400, `Number ${value} not allowed`)
    }

    return value
  }
}
