import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const todosSelector = createDraftSafeSelector(
  (state: RootState) => state,
  (state) => state.todos.todos
);
