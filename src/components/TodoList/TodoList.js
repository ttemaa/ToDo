import React from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import TodoListItem from "../TodoListItem";
import Loader from "../Loader";
import { getTasks, deleteTask, updateTask } from "../../redux/actions";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }

  filterItems(taskList, filter) {
    if (filter === "all") {
      return taskList;
    }
    if (filter === "active") {
      return taskList.filter((item) => !item.data.done);
    }
    if (filter === "done") {
      return taskList.filter((item) => item.data.done);
    }
  }
  searchItems(taskList, search) {
    if (search.length === 0) {
      return taskList;
    }
    return taskList.filter((item) => {
      return item.data.task.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
  render() {
    const {
      taskList,
      loading,
      disabled,
      deleteTask,
      updateTask,
      search,
      filter,
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (!taskList.length) {
      return <p>Nothing to do. You can add a new task.</p>;
    }

    const visibleTaskList = this.searchItems(
      this.filterItems(taskList, filter),
      search
    );
    return (
      <ul className="todo-list list-group">
        {visibleTaskList.map((item) => (
          <li key={item.id} className="list-group-item">
            <TodoListItem
              item={item}
              disabled={disabled}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </li>
        ))}
      </ul>
    );
  }
}
const mapDispatchToProps = { getTasks, deleteTask, updateTask };
const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
    loading: state.loading,
    disabled: state.disabled,
    search: state.search,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
