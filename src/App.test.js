import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import App from "./App";

afterEach(cleanup);

test("users should be able to enter new todos", () => {
  const { getByLabelText, getByText } = render(<App />);

  const input = getByLabelText("New task input");
  expect(input.value).toEqual("");

  fireEvent.change(input, { target: { value: "task 1" } });
  fireEvent.click(getByText("Add Todo"));

  expect(getByText("task 1")).toBeTruthy();
});

test("users should be able to toggle a todo", () => {
  const { getByLabelText, getByText } = render(<App />);

  const input = getByLabelText("New task input");

  fireEvent.change(input, { target: { value: "task 1" } });
  fireEvent.click(getByText("Add Todo"));

  const task = getByText("task 1");

  expect(task.dataset.taskcompleted).toEqual("false");

  fireEvent.click(task);

  expect(task.dataset.taskcompleted).toEqual("true");

  fireEvent.click(task);
  expect(task.dataset.taskcompleted).toEqual("false");
});
