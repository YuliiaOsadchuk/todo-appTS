import { TodoActionTypes } from "./types";
import { TodoAction, TodoState } from "./todoInterfaces";

const initialState: TodoState = {
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodoActionTypes.SAVE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return action.payload;
            }
            return todo;
          }),
        ],
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case TodoActionTypes.TOOGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};
