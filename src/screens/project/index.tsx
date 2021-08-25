/*
 * @Author       : 胡昊
 * @Date         : 2021-08-24 17:09:34
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-25 11:01:59
 * @FilePath     : /jira/src/screens/project/index.tsx
 * @Description  :
 */

import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import EpicScreen from "screens/epic";
import KanbanScreen from "screens/kanban";

const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="kanban" element={<KanbanScreen />} />
        <Route path="epic" element={<EpicScreen />} />
        <Navigate to="kanban" />
      </Routes>
    </div>
  );
};

export default ProjectScreen;
