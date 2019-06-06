import React from "react";
import matchSorter from "match-sorter";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchForm from "./components/SearchComponents/Form";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      search: ""
    };
  }

  componentDidMount() {
    let initialTodos = window.localStorage.getItem("react-todo-todos");

    if (initialTodos !== null) {
      this.setState({
        todos: JSON.parse(initialTodos)
      });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem(
        "react-todo-todos",
        JSON.stringify(this.state.todos)
      );
    }
  }

  addTodo = (task, id = Date.now()) => {
    const newTask = {
      task,
      id,
      completed: false
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTask]
    }));
  };

  clearCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.completed === false)
    }));
  };

  toggleTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  filterTodos = () => {
    return matchSorter(this.state.todos, this.state.search, { keys: ["task"] });
  };

  handleSearchChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSearchClear = () => this.setState({ search: "" });

  render() {
    const filteredTodos =
      this.state.search !== "" ? this.filterTodos() : this.state.todos;

    return (
      <div className="app-container">
        <SearchForm
          searchValue={this.state.search}
          handleChange={this.handleSearchChange}
          handleClear={this.handleSearchClear}
        />
        <TodoForm
          handleSubmit={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList tasks={filteredTodos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
