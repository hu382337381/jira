/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 09:54:07
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-13 15:42:49
 * @FilePath     : /jira/src/authenticated-app.tsx
 * @Description  :
 */

import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/project-list";

const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};

export default AuthenticatedApp;
