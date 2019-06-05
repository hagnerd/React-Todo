import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import App from "./App";

afterEach(() => {
  localStorage.clear();
  cleanup();
});

const addTodos = (input, submitBtn, arrayOfNewTodoValues) =>
  arrayOfNewTodoValues.forEach(value => {
    fireEvent.change(input, { target: { value } });
    fireEvent.click(submitBtn);
  });

test("users should be able to enter new todos", () => {
  const { getByLabelText, getByText } = render(<App />);

  const input = getByLabelText("New todo:");
  expect(input.value).toEqual("");

  fireEvent.change(input, { target: { value: "task 1" } });
  fireEvent.click(getByText("Add Todo"));

  expect(getByText("task 1")).toBeTruthy();
});

test("users should be able to toggle a todo", () => {
  const { getByLabelText, getByText } = render(<App />);

  const input = getByLabelText("New todo:");

  fireEvent.change(input, { target: { value: "task 1" } });
  fireEvent.click(getByText("Add Todo"));

  const task = getByText("task 1");

  expect(task.dataset.taskcompleted).toEqual("false");

  fireEvent.click(task);

  expect(task.dataset.taskcompleted).toEqual("true");

  fireEvent.click(task);
  expect(task.dataset.taskcompleted).toEqual("false");
});

test("user should be able to clear completed todos", () => {
  const { getByLabelText, getByText, queryByText } = render(<App />);

  const input = getByLabelText("New todo:");
  const submitBtn = getByText("Add Todo");

  addTodos(input, submitBtn, ["task 1", "task 2", "task 3"]);

  const taskOne = getByText("task 1");
  fireEvent.click(taskOne);
  const taskThree = getByText("task 3");
  fireEvent.click(taskThree);

  const clearCompletedBtn = getByText("Clear Completed");
  fireEvent.click(clearCompletedBtn);

  expect(queryByText("task 1")).toEqual(null);
  expect(queryByText("task 3")).toEqual(null);
  expect(queryByText("task 2")).toBeTruthy();
});

test("should persist data", () => {
  const tasks = ["task 1", "task 2", "task 3"];
  const firstRender = render(<App />);

  const todoInput = firstRender.getByLabelText("New todo:");
  const submitBtn = firstRender.getByText("Add Todo");

  addTodos(todoInput, submitBtn, tasks);

  firstRender.unmount();

  const secondRender = render(<App />);

  tasks.forEach(task => {
    expect(secondRender.getByText(task)).toBeTruthy();
  });
});

test("user should be able to filter todos", () => {
  const container = render(<App />);

  const todoInput = container.getByLabelText("New todo:");
  const submitBtn = container.getByText("Add Todo");
  const searchInput = container.getByLabelText("Search Todos:");

  addTodos(todoInput, submitBtn, ["task 1", "task 2", "also task 2"]);
  fireEvent.change(searchInput, { target: { value: "task 2" } });

  expect(container.getAllByText(/task 2/g).length).toEqual(2);
  expect(container.queryByText("task 1")).toEqual(null);
});
