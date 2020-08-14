import React from "react";
import { connect } from "react-redux";
import "./Header.css";

const Header = ({ taskList }) => {
  const doneCount = taskList.filter((item) => item.data.done).length;
  const toDoCount = taskList.length - doneCount;
  return (
    <div className="header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDoCount} more to do, {doneCount} done
      </h2>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
  };
};

export default connect(mapStateToProps, null)(Header);
