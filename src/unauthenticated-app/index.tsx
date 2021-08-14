import { Button } from "antd";
import { useState } from "react";
import LoginScreen from "./login";
import RegisterScreen from "./register";

/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:33:06
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 09:28:58
 * @FilePath     : /jira/src/unauthenticated-app/index.tsx
 * @Description  :
 */
const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}></button>
      <Button onClick={() => setIsRegister(!isRegister)} type="primary">
        切换到{isRegister ? "登录" : "注册"}
      </Button>
    </>
  );
};

export default UnauthenticatedApp;
