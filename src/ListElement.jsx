import { useState } from "react";
import EditableText from "./EditableText";
import Editable from "./myEditable";

export default function ListElement({ todo, handleRmTodo, handleCompletedTodo, editTodo }) {
  const isCompleted = todo.completed;
  function handleOnChange() {
    handleCompletedTodo(todo.id, !todo.completed);
  }

  function getChange(text) {
    if (todo.text !== text) editTodo(todo.id, text);
  }

  return (
    <li className="list-element">
      <input className="check" type="checkbox" checked={isCompleted} onChange={handleOnChange}></input>
      <div className="todo-text-box">
        {/* <span contentEditable="true" onChange={handleOnChange} className={isCompleted ? "text-line-through" : ""}>
          {todo.text}
        </span> */}
        <Editable text={todo.text} getChange={getChange} completed={todo.completed} />

        <a className="delete-btn " id="1" onClick={handleRmTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-close w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </a>
      </div>
    </li>
  );
}
