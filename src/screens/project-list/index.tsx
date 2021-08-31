/*
 * @Author       : 胡昊
 * @Date         : 2021-08-06 18:07:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 17:37:44
 * @FilePath     : /jira/src/screens/project-list/index.tsx
 * @Description  :
 */
import styled from "@emotion/styled";
import { Typography } from "antd";
import { ButtonNoPadding, Row } from "components/lib";
import { useDispatch } from "react-redux";
import { useDebounce, useDocumentTitle } from "utils";
import { useProject } from "utils/project";
import { useUser } from "utils/user";
import List from "./list";
import { openProjectModal } from "./project-list.slice";
import SearchPanel from "./search-panel";
import { useProjectsSearchParams } from "./util";

const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const dispatch = useDispatch();

  const {
    data: list,
    isLoading,
    error,
    retry,
  } = useProject(useDebounce(param, 200));

  const { data: users } = useUser();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <Row marginBottom={2} between>
        <h1>项目列表</h1>
        <ButtonNoPadding
          type="link"
          onClick={() => dispatch(openProjectModal())}
        >
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectListScreen;
