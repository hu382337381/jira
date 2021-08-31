/*
 * @Author       : 胡昊
 * @Date         : 2021-08-31 15:04:02
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 17:21:40
 * @FilePath     : /jira/src/screens/project-list/project-list.slice.ts
 * @Description  :
 */

import { createSlice } from "@reduxjs/toolkit";
import { Project } from "screens/project-list/list";
import { User } from "screens/project-list/search-panel";
import { RootState } from "store";

interface State {
  projcetModalOpen: boolean;
  projects: Project[];
  user: User | null;
}

const initialState: State = {
  projcetModalOpen: false,
  projects: [],
  user: null,
};

export const projectListSlice = createSlice({
  name: "projectListSlice",
  initialState,
  reducers: {
    openProjectModal: (state) => {
      state.projcetModalOpen = true;
    },
    closeProjectModal: (state) => {
      state.projcetModalOpen = false;
    },
    setProjectList: (state, action) => {
      state.projects = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { openProjectModal, closeProjectModal, setProjectList, setUser } =
  projectListSlice.actions;

export const selectProjectModalOpen = (state: RootState) =>
  state.projectList.projcetModalOpen;
