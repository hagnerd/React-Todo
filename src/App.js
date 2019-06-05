import React from "react";
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
    const todoIndex = this.state.todos.findIndex(todo => todo.id === id);
    this.setState(prevState => ({
      todos: [
        ...prevState.todos.slice(0, todoIndex),
        {
          ...prevState.todos[todoIndex],
          completed: !prevState.todos[todoIndex].completed
        },
        ...prevState.todos.slice(todoIndex + 1)
      ]
    }));
  };

  filterTodos = () => {
    const regex = new RegExp(`${this.state.search}`);
    return this.state.todos.filter(todo => regex.test(todo.task));
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
