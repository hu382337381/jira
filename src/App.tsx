/*
 * @Author       : 胡昊
 * @Date         : 2021-08-04 14:26:59
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-24 10:08:04
 * @FilePath     : /jira/src/App.tsx
 * @Description  :
 */
import AuthenticatedApp from "authenticated-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageError } from "components/lib";
import { useAuth } from "context/auth-context";
import React from "react";
import UnauthenticatedApp from "unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
