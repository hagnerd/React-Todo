import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

export default function Todo({ task, completed, handleClick }) {
  return (
    <li className="todo-item">
      <button
        onClick={handleClick}
        data-taskcompleted={completed}
        className={completed ? "completed" : ""}
      >
        {task}
      </button>
    </li>
  );
}

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};
