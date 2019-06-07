import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import TodoForm, { TodoFormProps } from "./TodoForm";

afterEach(cleanup);

const propFac = (props?: TodoFormProps) => ({
  handleSubmit: jest.fn(),
  clearCompleted: jest.fn(),
  ...props
});

const defaultProps = propFac();
const label = "New todo:";

test("it should render", () => {
  const { getByLabelText } = render(<TodoForm {...defaultProps} />);

  expect(getByLabelText(label)).toBeTruthy();
});

test("a user should be able to use the form", () => {
  const { getByLabelText, getByText } = render(<TodoForm {...defaultProps} />);

  const input = getByLabelText(label) as HTMLInputElement;

  fireEvent.change(input, { target: { value: "cool" } });

  expect(input.value).toEqual("cool");

  fireEvent.click(getByText("Add Todo"));

  expect(defaultProps.handleSubmit).toHaveBeenCalledTimes(1);
  expect(defaultProps.handleSubmit).toHaveBeenCalledWith("cool");

  expect(input.value).toEqual("");
});
