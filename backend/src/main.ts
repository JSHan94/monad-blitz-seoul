import {
  Logger as NestLogger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import compression from 'compression'
import helmet from 'helmet'
import hpp from 'hpp'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module'
import { initORM } from './orm'

async function bootstrap() {
  await initORM()
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
    cors: true,
  })
  app.enableVersioning({
    type: VersioningType.URI,
  })
  const configService = app.get(ConfigService)
  const port = parseInt(configService.get<string>('PORT', ''), 10)
  const env = configService.get<string>('NODE_ENV', 'production')
  const helmetOptions = {
    frameguard: false,
    dnsPrefetchControl: {
      allow: true,
    },
    contentSecurityPolicy: env === 'production' ? undefined : false,
  }

  app.useLogger(app.get(Logger))

  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Dashboard API')
    .setDescription('Dashboard API Description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('swagger', app, document)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        target: false,
        value: false,
      },
    })
  )
  app.use([compression(), helmet(helmetOptions), hpp()])

  await app.listen(port)

  NestLogger.log(`App listening on port http://localhost:${port}/`)
}

bootstrap().catch(console.log)
