/*
 * @Author       : 胡昊
 * @Date         : 2021-08-06 18:07:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-25 18:01:43
 * @FilePath     : /jira/src/screens/project-list/index.tsx
 * @Description  :
 */
import styled from "@emotion/styled";
import { Typography } from "antd";
import { Row } from "components/lib";
import { useDebounce, useDocumentTitle } from "utils";
import { useProject } from "utils/project";
import { useUrlQueryParam } from "utils/url";
import { useUser } from "utils/user";
import List from "./list";
import SearchPanel from "./search-panel";

const ProjectListScreen = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);

  const debouncedParam = useDebounce(param, 500);

  const { data: list, isLoading, error } = useProject(debouncedParam);

  const { data: users } = useUser();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <Row marginBottom={2}>
        <h1>项目列表</h1>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectListScreen;
