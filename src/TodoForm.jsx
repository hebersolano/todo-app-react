import { useState } from "react";

export default function TodoForm({ ctrl }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target[0].value;
    if (inputValue) {
      ctrl.addTodo(event.target[0].value);
    }
    setInput("");
  }

  return (
    <form className="todo-form" action="" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add todo"
        name="todo"
        value={input}
        onChange={handleChange}
      ></input>
      <button className="todo-btn btn">Add</button>
    </form>
  );
}
