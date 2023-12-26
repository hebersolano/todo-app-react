import { useEffect, useState } from "react";
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function TodoApp() {
  // MODEL
  // const initData = [
  //   { id: uuid(), text: "take a shower", completed: true },
  //   { id: uuid(), text: "study coding", completed: false },
  // ];
  const initData = getData();
  const [todoList, setTodoList] = useState(initData);

  function getData() {
    return JSON.parse(localStorage.getItem("todoList"));
  }
  function saveData(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  useEffect(
    function () {
      saveData(todoList);
    },
    [todoList]
  );

  const controller = {
    addTodo(data) {
      console;
      setTodoList((arr) => [...arr, { id: uuid(), text: data, completed: false }]);
    },

    rmTodo(id) {
      setTodoList((arr) => arr.filter((todo) => todo.id !== id));
    },

    completedTodo(id, bool) {
      setTodoList((arr) =>
        arr.map((todo) => {
          if (todo.id === id) {
            todo.completed = bool;
          }
          return todo;
        })
      );
    },

    editTodo(id, text) {
      setTodoList((arr) =>
        arr.map((todo) => {
          if (todo.id === id) {
            todo.text = text;
          }
          console.log(todo);
          return todo;
        })
      );
    },
  };

  // CONTROLLER

  // VIEW
  return (
    <div id="root">
      <h1 className="title">Todos</h1>
      <TodoForm ctrl={controller} />
      <TodoList ctrl={controller} todoList={todoList} />
    </div>
  );
}
