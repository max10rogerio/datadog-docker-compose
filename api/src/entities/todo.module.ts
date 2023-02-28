import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [],
})
export class TodoModule {}
