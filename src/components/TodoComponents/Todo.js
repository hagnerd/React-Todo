import React from "react";
import PropTypes from "prop-types";

export default function Todo({ task }) {
  return <li>{task}</li>;
}

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired
};
