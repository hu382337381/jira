/*
 * @Author       : 胡昊
 * @Date         : 2021-08-04 14:26:59
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 11:18:06
 * @FilePath     : /jira/src/index.tsx
 * @Description  :
 */
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
import "antd/dist/antd.less";
import AppProviders from "context";

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
