import { todoService } from "../../services/";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   IAuthLogin,
//   IAuthRegister,
//   IResponseSuccess,
//   IUser,
// } from "../../interfaces";

import { notify } from "../../utils";

export const create = createAsyncThunk(
  "todo/create",
  async (body: { title: string }, thunkAPI) => {
    try {
      const response = await todoService.create(body);
      notify(response.data.status, response.data.message);
      return response.data.data;
    } catch (error) {
      const err = error.response.data.message;
      notify(err.response?.status, error.response?.data?.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const list = createAsyncThunk("todo/list", async (arg, thunkAPI) => {
  try {
    const {
      data: { data },
    } = await todoService.list();

    return data;
  } catch (error) {
    const err = error.response.data.message;
    notify(err.response?.status, error.response?.data?.message);
    return thunkAPI.rejectWithValue(err);
  }
});

export const update = createAsyncThunk(
  "todo/update",
  async (arg: any, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await todoService.update({
        id: arg.id,
        todo: arg.todo,
      });

      return data;
    } catch (error) {
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const single = createAsyncThunk(
  "todo/single",
  async (id: string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await todoService.single(id);

      return data;
    } catch (error) {
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const remove = createAsyncThunk(
  "todo/remove",
  async (id: string, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await todoService.remove(id);

      return data;
    } catch (error) {
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);
