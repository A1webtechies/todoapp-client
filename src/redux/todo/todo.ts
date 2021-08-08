import { createSlice } from "@reduxjs/toolkit";
import { ITodo, ITodoReducer } from "../../interfaces";

import { create, list, remove, single, update } from "./todo.async";

const initialState = { loading: false } as ITodoReducer;
const mapItems = (items: Array<ITodo>) => {
  let mapped: any = {};

  items.forEach((item) => (mapped[item._id] = item));
  return mapped;
};
const slice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    /**
     * create
     */
    [create.pending.type]: (state) => {
      state.loading = true;
    },
    [create.fulfilled.type]: (state, { payload }) => {
      state.items = { ...state.items, [payload._id]: payload };
      state.loading = false;
    },
    [create.rejected.type]: (state) => {
      state.loading = false;
    },

    [list.pending.type]: (state) => {
      state.loading = true;
    },
    [list.fulfilled.type]: (state, { payload }) => {
      state.items = mapItems(payload);
      state.loading = false;
    },
    [list.rejected.type]: (state) => {
      state.loading = false;
    },
    /**
     * update
     */
    [update.pending.type]: (state, { meta: { arg } }) => {
      state.loading = true;
      state.items = {
        ...state.items,
        [arg.id]: {
          ...state.items[arg.id],
          status: !state.items[arg.id].status,
        },
      };
    },
    [update.fulfilled.type]: (state, { payload }) => {
      state.items = { ...state.items, [payload._id]: payload };

      state.loading = false;
      state.selectedItem = {} as ITodo;
    },
    [update.rejected.type]: (state) => {
      state.loading = false;
    },

    /**
     * single
     */
    [single.pending.type]: (state) => {
      state.loading = true;
    },
    [single.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.selectedItem = payload;
    },
    [single.rejected.type]: (state) => {
      state.loading = false;
    },

    /**
     * remove
     */
    [remove.pending.type]: (state, { meta: { arg } }) => {
      state.loading = true;
      const { [arg]: item, ...rest } = state.items;
      state.items = rest;
    },

    [remove.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});
export const { reducer: todoReducer, actions: todoActions } = slice;
