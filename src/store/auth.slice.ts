/*
 * @Author       : 胡昊
 * @Date         : 2021-08-31 17:53:51
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-09-01 15:23:07
 * @FilePath     : /jira/src/store/auth.slice.ts
 * @Description  :
 */
import { createSlice } from "@reduxjs/toolkit";
import { AuthForm, bootstrapUser } from "context/auth-context";
import { User } from "screens/project-list/search-panel";
import { AppDispatch, RootState } from "store";
import * as auth from "auth-provider";

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { setUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

export const login = (form: AuthForm) => (dispatch: AppDispatch) =>
  auth.login(form).then((user) => dispatch(setUser(user)));

export const register = (form: AuthForm) => (dispatch: AppDispatch) =>
  auth.register(form).then((user) => dispatch(setUser(user)));

export const logout = () => (dispatch: AppDispatch) =>
  auth.logout().then(() => dispatch(setUser(null)));

export const bootstrap = () => (dispatch: AppDispatch) =>
  bootstrapUser().then((user) => dispatch(setUser(user)));
