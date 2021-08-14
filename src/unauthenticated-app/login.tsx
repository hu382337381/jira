/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:37:12
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 10:03:53
 * @FilePath     : /jira/src/unauthenticated-app/login.tsx
 * @Description  :
 */

import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";

const LoginScreen = () => {
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form
      onFinish={handleSubmit}
      // labelCol={{ span: 4 }}
      // wrapperCol={{ span: 4 }}
    >
      <Form.Item name="username" label="用户名">
        <Input placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input placeholder="密码" type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginScreen;
