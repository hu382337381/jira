/*
 * @Author       : 胡昊
 * @Date         : 2021-08-13 09:54:07
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 15:04:17
 * @FilePath     : /jira/src/authenticated-app.tsx
 * @Description  :
 */

import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { ReactComponent as SoftwarteLogo } from "assets/software-logo.svg";
import { ButtonNoPadding, Row } from "components/lib";
import ProjectPopover from "components/project-popover";
import { useAuth } from "context/auth-context";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProjectScreen from "screens/project";
import ProjectListScreen from "screens/project-list";
import ProjectModal from "screens/project-list/project-modal";
import { resetRoute } from "utils";

const AuthenticatedApp = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <Container>
      <PageHeader setProjectModalOpen={setProjectModalOpen} />
      <Router>
        <Routes>
          <Route
            path="/projects"
            element={
              <ProjectListScreen setProjectModalOpen={setProjectModalOpen} />
            }
          />
          <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          <Navigate to="/projects" />
        </Routes>
      </Router>
      <ProjectModal
        projectModalOpen={projectModalOpen}
        onClose={() => {
          setProjectModalOpen(false);
        }}
      />
    </Container>
  );
};

const PageHeader = (props: {
  setProjectModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Header between>
      <HeaderLeft gap>
        <ButtonNoPadding type="link" onClick={resetRoute}>
          <SoftwarteLogo width="18rem" color="rgb(38,132,255)" />
        </ButtonNoPadding>
        <ProjectPopover setProjectModalOpen={props.setProjectModalOpen} />
        <span>用户</span>
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
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
