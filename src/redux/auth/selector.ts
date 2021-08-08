import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../../interfaces";
const selectDomain = (state: IStore) => state.auth;
export const tokenSelector = createSelector(
  selectDomain,
  (auth) => auth.access_token
);
export const messageSelector = createSelector(
  selectDomain,
  (auth) => auth.message
);
export const authLoadingSelector = createSelector(
  selectDomain,
  (auth) => auth.loading
);
export const userSelector = createSelector(selectDomain, (auth) => auth.user);
