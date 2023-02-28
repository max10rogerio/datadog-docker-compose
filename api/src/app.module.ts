import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config/env';
import { TodoEntity } from './entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...env.database,
      synchronize: true,
      entities: [TodoEntity],
    }),
  ],
})
export class AppModule {}
