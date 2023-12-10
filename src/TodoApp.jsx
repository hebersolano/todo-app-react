import { useState } from "react";
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function TodoApp() {
  const init = [
    { id: uuid(), text: "take a shower", completed: false },
    { id: uuid(), text: "study coding", completed: false },
  ];
  const [todoList, setTodoList] = useState(init);
  return (
    <div id="root">
      <h1 className="title">Todos</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}
