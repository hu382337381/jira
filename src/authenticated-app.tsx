/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 09:54:07
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-20 14:56:00
 * @FilePath     : /jira/src/authenticated-app.tsx
 * @Description  :
 */

import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";

const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between>
        <HeaderLeft gap>
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

const Header = styled(Row)`
  padding: 0 3rem;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
export default AuthenticatedApp;
