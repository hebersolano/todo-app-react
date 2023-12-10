import { useState } from "react";

export default function ListElement({
  todo,
  handleRmTodo,
  handleCompletedTodo,
}) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  function handleOnChange(event) {
    // todo.completed = !event.target.checked;
    setIsCompleted(handleCompletedTodo());
  }
  return (
    <li className="list-element">
      <input
        className="check"
        type="checkbox"
        checked={isCompleted}
        onChange={handleOnChange}
      ></input>
      <div className="todo-text-box">
        <span contentEditable="false" className="editable">
          {isCompleted ? <s>{todo.text}</s> : todo.text}
        </span>
        <a className="delete-btn " id="1" onClick={handleRmTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-close w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </a>
      </div>
    </li>
  );
}
