import { useState } from "react";

export default function TodoForm() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
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
      <button className="todo-btn btn">Submit</button>
    </form>
  );
}
