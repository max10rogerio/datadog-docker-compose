import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  @Get()
  async findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }

  @Post()
  async create(@Body('description') description: string): Promise<TodoEntity> {
    return this.todoRepository.save({ description });
  }

  @Put('/:id/change-status')
  async update(@Param('id') id: number): Promise<TodoEntity> {
    const todo = await this.todoRepository.findOneBy({ id });

    todo.completed = !todo.completed;

    return this.todoRepository.save(todo);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
