import { FaTrash } from "react-icons/fa";

function TodoItem(props) {
  const date = new Date();

  const { title, deadline, status, handleDelete, id, handleEdit } = props;

  return (
    <div className="todo-container">
      <h2 className="title-h2">{title}</h2>
      <h4 className="deadline-p">Deadline: {deadline}</h4>
      <h5 className="date-p">Added date: {date.toLocaleDateString()}</h5>
      <div className="action-buttons">
        <FaTrash
          className="delete-todo-btn"
          onClick={() => handleDelete(id)}
        ></FaTrash>
      </div>
      <div
        className={
          status === "ongoing"
            ? "box yellow"
            : status === "finished"
            ? "box green"
            : "box red"
        }
      >
        {status === "ongoing"
          ? "Ongoing"
          : status === "finished"
          ? "Finished"
          : "Not Started"}
      </div>
    </div>
  );
}

export default TodoItem;
