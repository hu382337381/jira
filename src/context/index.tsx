/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:44:16
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-23 11:09:12
 * @FilePath     : /jira/src/context/index.tsx
 * @Description  :
 */

import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
import { QueryClientProvider, QueryClient } from "react-query";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children} </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
