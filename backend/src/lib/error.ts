import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common'
import { Response } from 'express'

export enum ErrorTypes {
  // 400 Bad Request
  INVALID_REQUEST_ERROR = 400,
  // 401 Unauthorized
  AUTHENTICATION_ERROR = 401,
  // 403 Forbidden
  FORBIDDEN = 403,
  // 404
  NOT_FOUND_ERROR = 404,
  // 408
  TIMEOUT = 408,
  // 429 Too Many Requests
  RATE_LIMIT_ERROR = 429,
  // 500 Internal Server Error
  API_ERROR = 500,
  // 503 Service Unavailable
  SERVICE_UNAVAILABLE = 503,
}

export class APIError extends Error {
  public message: string
  public statusCode: number

  constructor(code = 500, message = '') {
    super(message)
    this.name = 'APIError'
    this.statusCode = code
    this.message = message
  }
}

@Catch()
export class CustomFilter implements ExceptionFilter {
  catch(exception: APIError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception?.statusCode ? exception?.statusCode : 500

    response.status(status).json({
      statusCode: status,
      message: exception.message,
    })
  }
}
