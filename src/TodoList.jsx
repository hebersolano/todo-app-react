import ListElement from "./ListElement";

export default function TodoList({ todoList, ctrl }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => {
        return <ListElement key={todo.id} todo={todo} handleRmTodo={() => ctrl.rmTodo(todo.id)} />;
      })}
    </ul>
  );
}
