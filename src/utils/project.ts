/*
 * @Author       : 胡昊
 * @Date         : 2021-08-23 17:02:55
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-23 17:11:59
 * @FilePath     : /jira/src/utils/project.ts
 * @Description  :
 */

import { useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProject = (param: Partial<Project>) => {
  const client = useHttp();

  const { run, ...rest } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObject(param) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return rest;
};
