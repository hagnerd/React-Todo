import React from "react";
import { render } from "@testing-library/react";

import Todo from "./Todo";

const propFac = props => ({
  task: "Mow the lawn",
  id: 1,
  completed: false,
  handleClick: jest.fn(),
  ...props
});

const defaultProps = propFac();

test("it should render properly", () => {
  const { getByText } = render(<Todo {...defaultProps} />);

  expect(getByText("Mow the lawn")).toBeTruthy();
});
