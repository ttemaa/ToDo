import React from "react";
import { connect } from "react-redux";

import { createTask } from "../../redux/actions";

import "./AddItem.css";
class AddItem extends React.Component {
  state = { value: "" };

  changeInputHandler = (event) => {
    this.setState({ value: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.value.trim().length === 0) return;
    const newTask = {
      task: this.state.value,
    };
    this.props.createTask(newTask);
    this.setState({ value: "" });
  };
  render() {
    const { disabled } = this.props;
    return (
      <form className="add-form d-flex" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="form-control add-form_input"
          value={this.state.value}
          onChange={this.changeInputHandler}
          placeholder={"Add task"}
          disabled={disabled}
        />
        <button
          className="add-form_btn"
          type="submit"
          className="btn btn-outline-secondary add-form_btn"
          disabled={disabled}
        >
          Add
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = { createTask };
const mapStateToProps = (state) => {
  return {
    disabled: state.disabled,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
