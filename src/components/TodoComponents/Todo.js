import React from "react";
import PropTypes from "prop-types";

export default function Todo({ task, completed, handleClick }) {
  return (
    <li onClick={handleClick} data-taskcompleted={completed}>
      {task}
    </li>
  );
}

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};
