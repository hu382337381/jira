/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:37:12
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-24 09:31:43
 * @FilePath     : /jira/src/unauthenticated-app/login.tsx
 * @Description  :
 */

import { Form, Input } from "antd";
import { useAuth } from "context/auth-context";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";

const LoginScreen = ({ onError }: { onError: (error: Error) => void }) => {
  const { login } = useAuth();

  const { run, isLoading, error } = useAsync(undefined, {
    throwOnError: true,
  });

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(values));
      // console.log("我会错误", error);
    } catch (e) {
      onError(e);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} type="primary" htmlType="submit">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};

export default LoginScreen;
