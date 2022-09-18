import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete }) {
  const todosList = todos.map((todo) => {
    return (
      <TodoItem
        id={todo.id}
        key={todo.id}
        title={todo.title}
        deadline={todo.deadline}
        status={todo.status}
        handleDelete={handleDelete}
      ></TodoItem>
    );
  });
  return <div className="todos-container">{todosList}</div>;
}

export default TodoList;
