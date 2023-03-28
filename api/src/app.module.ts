import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config/env';
import { TodoEntity } from './entities/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...env.database,
      synchronize: true,
      entities: [TodoEntity],
    }),
    TodoModule,
  ],
})
export class AppModule {}
