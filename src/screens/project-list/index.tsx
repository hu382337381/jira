/*
 * @Author       : 胡昊
 * @Date         : 2021-08-06 18:07:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-13 16:41:23
 * @FilePath     : /jira/src/screens/project-list/index.tsx
 * @Description  :
 */
import { useEffect, useState } from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import qs from "qs";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({ name: "", personId: "" });

  const debouncedParam = useDebounce(param, 500);
  const client = useHttp();

  useEffect(() => {
    /* fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    }); */
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam]);

  useMount(() => {
    /* fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    }); */
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
