/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:44:16
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-13 14:48:09
 * @FilePath     : /jira/src/context/index.tsx
 * @Description  :
 */

import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children} </AuthProvider>;
};

export default AppProviders;
