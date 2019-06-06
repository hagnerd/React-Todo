import React from "react";
import useLocalStorage from "./useLocalStorage";

const initialState = {
  todos: []
};

function todosReducer(state, action) {
  switch (action.type) {
    case "HYDRATE_TODOS":
      return {
        ...state,
        todos: action.payload
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), completed: false, task: action.payload }
        ]
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

export default function useTodos(init = initialState) {
  const [state, dispatch] = React.useReducer(todosReducer, init);
  const setter = React.useCallback(
    payload => dispatch({ type: "HYDRATE_TODOS", payload }),
    [dispatch]
  );

  useLocalStorage("react-todo-todos", setter, state.todos);

  return {
    todos: state.todos,
    addTodo: todo => dispatch({ type: "ADD_TODO", payload: todo }),
    toggleTodo: id => dispatch({ type: "TOGGLE_TODO", payload: id }),
    clearCompletedTodos: () => dispatch({ type: "CLEAR_COMPLETED" })
  };
}
