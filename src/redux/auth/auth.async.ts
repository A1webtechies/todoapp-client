import { authService } from "../../services/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { userService } from "../../services/user.service";
import {
  IAuthLogin,
  IAuthRegister,
  IResponseSuccess,
  IUser,
} from "../../interfaces";
import { AxiosResponse } from "axios";
import { notify } from "../../utils";

export const login = createAsyncThunk(
  "auth/login",
  async (body: IAuthLogin, thunkAPI) => {
    try {
      const response = await authService.login(body);
      notify(response.data.status, response.data.message);
      return response.data.data;
    } catch (error) {
      const err = error.response.data.message;
      notify(err.response?.status, error.response?.data?.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (body: IAuthRegister, thunkAPI) => {
    try {
      const response = await authService.register(body);
      notify(response.data.status, response.data.message);
      return response.data.data;
    } catch (error) {
      const err = error.response.data.message;
      notify(err.response?.status, error.response?.data?.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const refreshProfile = createAsyncThunk(
  "auth/refresh-profile",
  async (arg, thunkAPI) => {
    try {
      const { data } = await userService.me();

      return data.data;
    } catch (error) {
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);
