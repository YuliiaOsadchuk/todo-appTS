import { TodoActionTypes } from "./types";
import { TodoAction } from "./todoInterfaces";
import { ITodo } from "../interfaces";

export function addTodo(todo: ITodo): TodoAction {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: todo,
  };
}

export function editTodo(todo: ITodo): TodoAction {
  return {
    type: TodoActionTypes.EDIT_TODO,
    payload: todo,
  };
}

export function deleteTodo(id: number): TodoAction {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: id,
  };
}

export function toogleTodo(id: number): TodoAction {
  return {
    type: TodoActionTypes.TOOGLE_TODO,
    payload: id,
  };
}
