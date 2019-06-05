import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

export default function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <Todo key={task.id} {...task} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)).isRequired
};
