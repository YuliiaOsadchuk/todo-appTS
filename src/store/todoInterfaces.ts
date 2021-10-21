import { ITodo } from "../interfaces";
import { TodoActionTypes } from "./types";

export interface TodoState {
  todos: ITodo[];
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: ITodo;
}
interface EditTodoAction {
  type: TodoActionTypes.EDIT_TODO;
  payload: ITodo;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: number;
}

interface ToogleTodoAction {
  type: TodoActionTypes.TOOGLE_TODO;
  payload: number;
}

export type TodoAction =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ToogleTodoAction;
