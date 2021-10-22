import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectSelf = (state: RootState) => state;
export const draftSafeSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.todos.todos
);
