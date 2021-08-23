/*
 * @Author       : 胡昊
 * @Date         : 2021-08-06 18:07:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-23 11:56:02
 * @FilePath     : /jira/src/screens/project-list/index.tsx
 * @Description  :
 */
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { useCallback, useEffect, useState } from "react";
import { cleanObject, useDebounce } from "utils";
import { useHttp } from "utils/http";
import List from "./list";
import SearchPanel from "./search-panel";

const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({ name: "", personId: "" });

  const debouncedParam = useDebounce(param, 500);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam]);

  const init = useCallback(() => {
    client("users").then(setUsers);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Container>
      <Row marginBottom={2}>
        <h1>项目列表</h1>
      </Row>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectListScreen;
