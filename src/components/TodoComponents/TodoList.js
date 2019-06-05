import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

export default function TodoList({ tasks, toggleTodo }) {
  return (
    <ul>
      {tasks.map(task => (
        <Todo key={task.id} {...task} handleClick={() => toggleTodo(task.id)} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};
