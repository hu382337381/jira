/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 09:54:07
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-20 11:41:44
 * @FilePath     : /jira/src/authenticated-app.tsx
 * @Description  :
 */

import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/project-list";
import styled from "@emotion/styled";

const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <ProjectListScreen />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const HeaderLeft = styled.div`
  display: flex;
`;
const HeaderRight = styled.div``;
export default AuthenticatedApp;
