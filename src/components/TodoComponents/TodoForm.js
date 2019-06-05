import React from "react";
import PropTypes from "prop-types";

import Input from "../FormComponents/Input";
import Button from "../FormComponents/Button";
import "./TodoForm.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state.inputValue);

    this.setState({
      inputValue: ""
    });
  };

  handleChange = event => {
    const { value } = event.target;

    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form card shadow">
        <div className="todo-form--row">
          <div className="form-group">
            <label className="todo--input-label" htmlFor="new-todo-input">
              New todo:
            </label>
            <Input
              id="new-todo-input"
              className="todo-input"
              value={this.state.inputValue}
              handleChange={this.handleChange}
              placeholder="enter a new todo"
            />
          </div>
          <Button className="btn-default todo-form-button" type="submit">
            Add Todo
          </Button>
        </div>
        <Button
          className="btn-default todo-form-button"
          type="button"
          handleClick={this.props.clearCompleted}
        >
          Clear Completed
        </Button>
      </form>
    );
  }
}
