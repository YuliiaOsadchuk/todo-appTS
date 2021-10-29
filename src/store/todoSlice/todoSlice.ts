import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces";

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
      return state;
    },

    editTodo(state, action: PayloadAction<ITodo>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      return state;
    },

    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      return state;
    },

    toogleTodo(state: TodoState, action: PayloadAction<number>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return state;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toogleTodo } = todoSlice.actions;

export default todoSlice.reducer;
