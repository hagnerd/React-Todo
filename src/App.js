import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  addTodo = task => {
    const newTask = {
      task,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTask]
    }));
  };

  clearCompleted = () => {
    console.log("To do later");
  };

  render() {
    return (
      <div>
        <TodoList tasks={this.state.todos} />
        <TodoForm
          handleSubmit={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
