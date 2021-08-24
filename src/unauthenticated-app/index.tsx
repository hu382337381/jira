/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 14:33:06
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-24 14:44:02
 * @FilePath     : /jira/src/unauthenticated-app/index.tsx
 * @Description  :
 */
import styled from "@emotion/styled";
import { Button, Card, Typography } from "antd";
import left from "assets/left.svg";
import logo from "assets/logo.svg";
import right from "assets/right.svg";
import { useState } from "react";
import { useDocumentTitle } from "utils";
import LoginScreen from "./login";
import RegisterScreen from "./register";

const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useDocumentTitle("请登录注册以继续");

  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {error ? (
          <Typography.Text type="danger">{error?.message}</Typography.Text>
        ) : null}
        {isRegister ? (
          <RegisterScreen onError={setError} />
        ) : (
          <LoginScreen onError={setError} />
        )}
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已有账号？请登录" : "没有账号？请注册"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-top: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  /* background-size: calc((100vw - 40rem) / 2 - 3.2rem),
    calc((100vw - 40rem) / 2 - 3.2rem), cover; */
  background-size: calc((100vw - 40rem) / 2 - 3.2rem);
  background-image: url(${left}), url(${right});
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;
`;

export default UnauthenticatedApp;
