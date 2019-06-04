import React from "react";
import PropTypes from "prop-types";

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
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValue}
          aria-label="New task input"
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}
