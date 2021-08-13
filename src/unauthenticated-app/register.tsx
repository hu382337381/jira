/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:33:29
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-13 14:36:47
 * @FilePath     : /jira/src/unauthenticated-app/register.tsx
 * @Description  :
 */

import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    register({ username, password });
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
      <button type="submit">注册</button>
    </form>
  );
};

export default RegisterScreen;
