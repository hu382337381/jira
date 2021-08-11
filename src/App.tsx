/*
 * @Author       : 胡昊
 * @Date         : 2021-08-04 14:26:59
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-11 14:22:53
 * @FilePath     : /jira/src/App.tsx
 * @Description  :
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectListScreen from "screens/project-list";

function App() {
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
      <ProjectListScreen />
      {/* </header> */}
    </div>
  );
}

export default App;
