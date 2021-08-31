/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:44:16
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 16:33:24
 * @FilePath     : /jira/src/context/index.tsx
 * @Description  :
 */

import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "store";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>{children} </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default AppProviders;
