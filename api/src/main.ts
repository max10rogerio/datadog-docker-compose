import 'dd-trace/init';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.server.port);
}

bootstrap();
