import React from "react";
import useLocalStorage from "./useLocalStorage";

export interface Todo {
  task: string;
  id: number;
  completed: boolean;
}

interface State {
  todos: Array<Todo>;
}

type Payload<M = void> = M extends void ? void : { payload: M };

type Action<A, M = void, P = Payload<M>> = P extends void
  ? { type: A }
  : { type: A } & P;

type ActionType =
  | Action<"CLEAR_COMPLETED">
  | Action<"HYDRATE_TODOS", Array<Todo>>
  | Action<"ADD_TODO", string>
  | Action<"TOGGLE_TODO", number>;

const initialState: State = {
  todos: [] as Array<Todo>
};

function todosReducer(state: State, action: ActionType): State {
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

export default function useTodos(init: State = initialState) {
  const [state, dispatch] = React.useReducer(todosReducer, init);

  const setter = React.useCallback(
    payload => dispatch({ type: "HYDRATE_TODOS", payload }),
    [dispatch]
  );

  useLocalStorage("react-todo-todos", setter, state.todos);

  return {
    todos: state.todos,
    addTodo: (todo: string) => dispatch({ type: "ADD_TODO", payload: todo }),
    toggleTodo: (id: number) => dispatch({ type: "TOGGLE_TODO", payload: id }),
    clearCompletedTodos: () => dispatch({ type: "CLEAR_COMPLETED" })
  };
}
