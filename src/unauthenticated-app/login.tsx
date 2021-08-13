/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:37:12
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-13 14:37:41
 * @FilePath     : /jira/src/unauthenticated-app/login.tsx
 * @Description  :
 */

import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

const LoginScreen = () => {
  const { login } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};

export default LoginScreen;
