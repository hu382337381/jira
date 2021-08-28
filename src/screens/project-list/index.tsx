/*
 * @Author       : 胡昊
 * @Date         : 2021-08-06 18:07:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 15:05:56
 * @FilePath     : /jira/src/screens/project-list/index.tsx
 * @Description  :
 */
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { Row } from "components/lib";
import { useDebounce, useDocumentTitle } from "utils";
import { useProject } from "utils/project";
import { useUser } from "utils/user";
import List from "./list";
import SearchPanel from "./search-panel";
import { useProjectsSearchParams } from "./util";

const ProjectListScreen = (props: {
  setProjectModalOpen: (isOpen: boolean) => void;
}) => {
  const [param, setParam] = useProjectsSearchParams();

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
        <Button
          onClick={() => {
            props.setProjectModalOpen(true);
          }}
        >
          创建项目
        </Button>
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
        setProjectModalOpen={props.setProjectModalOpen}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectListScreen;
