import React from "react";
import matchSorter from "match-sorter";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/SearchComponents/Form";

import useTodos from "./useTodos";

import "./App.css";

function App() {
  const { todos, addTodo, clearCompletedTodos, toggleTodo } = useTodos();

  const [search, setSearch] = React.useState("");
  const filteredTodos =
    search !== "" ? matchSorter(todos, search, { keys: ["task"] }) : todos;

  return (
    <div className="app-container">
      <SearchForm
        searchValue={search}
        handleChange={event => setSearch(event.target.value)}
        handleClear={() => setSearch("")}
      />
      <TodoForm handleSubmit={addTodo} clearCompleted={clearCompletedTodos} />
      <TodoList tasks={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
