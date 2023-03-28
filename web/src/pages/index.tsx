import { TodoService } from "@/services/todo.service";
import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [todo, setTodo] = useState("");

  const todos = useSWR("/todos", () => TodoService.getTodos());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await TodoService.createTodo(todo);

    setTodo("");
    await todos.mutate();
  };

  const handleChangeStatus = async (id: number) => {
    await TodoService.updateStatusTodoById(id);
    await todos.mutate();
  };

  const handleDelete = async (id: number) => {
    await TodoService.deleteTodoById(id);
    await todos.mutate();
  };

  return (
    <>
      <Head>
        <title>Datadog todo</title>
        <meta name="description" content="Datadog todo example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Todo list!!!</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your todo here..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Add</button>
        </form>
        <hr />
        <h2>Your todos</h2>
        {todos.isLoading && <p>Loading...</p>}
        <ul>
          {todos.data?.map((todo) => (
            <li key={todo.id}>
              {todo.id} - {todo.description} -{" "}
              {todo.completed ? "Completed" : "Pending"}
              .....
              <button type="button" onClick={() => handleChangeStatus(todo.id)}>
                Change status
              </button>
              .....
              <button type="button" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <hr />
      </main>
    </>
  );
}
