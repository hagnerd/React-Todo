import React from "react";
import PropTypes from "prop-types";

import "./Todo.css";

export interface TodoProps {
  task: string;
  id: number;
  completed: boolean;
  handleClick: () => void;
}

export default function Todo({ task, completed, handleClick }: TodoProps) {
  return (
    <li className="todo-item shadow">
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
