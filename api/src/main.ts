import './tracer';
import { NestFactory } from '@nestjs/core';
import { Logger as PinoLogger } from 'nestjs-pino';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(PinoLogger));
  app.enableCors();

  const logger = new Logger('main');

  await app.listen(env.server.port).then(() => {
    logger.log(`Server listening on port ${env.server.port}`);
  });
}

bootstrap();
