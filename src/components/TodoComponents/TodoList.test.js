import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

const propFac = props => ({
  tasks: [
    { task: "mow the lawn", id: 1, completed: false },
    { task: "cook dinner", id: 2, completed: false },
    { task: "take down the trash", id: 3, completed: false }
  ],
  toggleTodo: jest.fn(),
  ...props
});

const defaultProps = propFac();

test("it should render a list of items passed in", () => {
  const { getByText } = render(<TodoList {...defaultProps} />);

  defaultProps.tasks.forEach(todo => expect(getByText(todo.task)).toBeTruthy());
});
