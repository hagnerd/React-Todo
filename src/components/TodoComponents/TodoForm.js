import React from "react";
import PropTypes from "prop-types";
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
      <form onSubmit={this.handleSubmit} className="todo-form">
        <div className="todo-form--row">
          <div className="form-group">
            <label className="todo--input-label" htmlFor="new-todo-input">
              New todo:
            </label>
            <input
              id="new-todo-input"
              className="todo-input"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="enter a new todo"
            />
          </div>
          <button className="todo-form-button" type="submit">
            Add Todo
          </button>
        </div>
        <button
          className="todo-form-button"
          type="button"
          onClick={this.props.clearCompleted}
        >
          Clear Completed
        </button>
      </form>
    );
  }
}
