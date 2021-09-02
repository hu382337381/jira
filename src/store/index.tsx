/*
 * @Author       : 胡昊
 * @Date         : 2021-08-31 15:02:37
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 18:01:25
 * @FilePath     : /jira/src/store/index.tsx
 * @Description  :
 */

import { configureStore } from "@reduxjs/toolkit";
import { projectListSlice } from "screens/project-list/project-list.slice";
import { authSlice } from "./auth.slice";

const store = configureStore({
  reducer: {
    projectList: projectListSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
