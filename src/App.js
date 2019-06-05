import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
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

  render() {
    return (
      <div className="app-container">
        <TodoForm
          handleSubmit={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList tasks={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
