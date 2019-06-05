import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({ tasks, toggleTodo }) {
  return (
    <ul className="todo-list">
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
