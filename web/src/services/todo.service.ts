import { Todo } from "@/types/todo.types";
import { api } from "./api";

export const TodoService = {
  async getTodos(): Promise<Todo[]> {
    const response = await api.get("/todos");

    return response.data;
  },

  async createTodo(todo: string): Promise<Todo> {
    const response = await api.post("/todos", {
      description: todo,
    });

    return response.data;
  },

  async updateStatusTodoById(id: number): Promise<Todo> {
    const response = await api.put(`/todos/${id}/change-status`);

    return response.data;
  },

  async deleteTodoById(id: number): Promise<void> {
    await api.delete(`/todos/${id}`);
  },
};
