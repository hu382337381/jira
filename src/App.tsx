/*
 * @Author       : 胡昊
 * @Date         : 2021-08-04 14:26:59
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 09:27:48
 * @FilePath     : /jira/src/App.tsx
 * @Description  :
 */
import AuthenticatedApp from "authenticated-app";
import { useAuth } from "context/auth-context";
import React from "react";
import UnauthenticatedApp from "unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}

      {/* <ProjectListScreen /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
