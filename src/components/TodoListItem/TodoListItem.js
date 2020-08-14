import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ item, disabled, deleteTask, updateTask }) => {
  let classNames = "list-item";
  if (item.data.important) {
    classNames += " important";
  }
  if (item.data.done) {
    classNames += " done";
  }
  return (
    <span className={classNames}>
      <span
        className="list-item_label"
        onClick={() => {
          updateTask({
            id: item.id,
            data: { ...item.data, done: !item.data.done },
          });
        }}
      >
        {item.data.task}
      </span>
      <div className="float-right">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm "
          disabled={disabled}
          onClick={() => {
            deleteTask(item.id);
          }}
        >
          <i class="fas fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-sm "
          disabled={disabled}
          onClick={() => {
            updateTask({
              id: item.id,
              data: { ...item.data, important: !item.data.important },
            });
          }}
        >
          <i className="fa fa-exclamation"></i>
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
