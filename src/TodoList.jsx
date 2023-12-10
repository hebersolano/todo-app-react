import ListElement from "./ListElement";

export default function TodoList({ todoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => {
        return <ListElement key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
