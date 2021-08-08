import { login, register, refreshProfile } from "./auth.async";

import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../interfaces";

const initialState = {} as IAuth;

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    error: (state, action) => {
      state.message = action.payload;
    },
    clear: (state) => {
      state.message = "";
    },
    logout: (state) => {
      state = {} as IAuth;
    },
  },

  extraReducers: {
    /**
     * Login
     */
    [login.pending.toString()]: (state) => {
      state.message = "";
      state.loading = true;
    },
    [login.fulfilled.toString()]: (state, { payload }) => {
      state.user = payload.user;
      state.access_token = payload.access_token;
      state.message = "";
      state.loading = false;
    },
    [login.rejected.toString()]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
  },
});
export const { reducer: authReducer, actions: authActions } = slice;
