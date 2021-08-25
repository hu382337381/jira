/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 09:54:07
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-24 18:02:46
 * @FilePath     : /jira/src/authenticated-app.tsx
 * @Description  :
 */

import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { ReactComponent as SoftwarteLogo } from "assets/software-logo.svg";
import { Row } from "components/lib";
import { useAuth } from "context/auth-context";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProjectScreen from "screens/project";
import ProjectListScreen from "screens/project-list";

const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Router>
        <Routes>
          <Route path="/projects" element={<ProjectListScreen />} />
          <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          <Navigate to="/projects" />
        </Routes>
      </Router>
    </Container>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between>
      <HeaderLeft gap>
        <SoftwarteLogo width="18rem" color="rgb(38,132,255)" />
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button type="link" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button
            type="link"
            // onClick={(e) => e?.preventDefault()}
          >
            Hi,{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 0 3rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
export default AuthenticatedApp;
