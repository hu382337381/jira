/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:33:29
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 09:56:33
 * @FilePath     : /jira/src/unauthenticated-app/register.tsx
 * @Description  :
 */

import { Button, Form, Input } from "antd";
import { useAuth } from "context/auth-context";

const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" label="用户名">
        <Input type="text" placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input type="password" placeholder="密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterScreen;
