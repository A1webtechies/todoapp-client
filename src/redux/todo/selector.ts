import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../../interfaces";
const selectDomain = (state: IStore) => state.todos;
export const todosSelector = createSelector(
  selectDomain,
  (todos) => todos.items
);
export const todoSelector = createSelector(
  selectDomain,
  (todos) => todos.selectedItem
);
export const todoLoadingSelector = createSelector(
  selectDomain,
  (todo) => todo.loading
);
