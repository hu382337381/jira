/*
 * @Author       : 胡昊
 * @Date         : 2021-08-23 17:02:55
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-27 12:02:31
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

  const fetchProjects = () => client("projects", { data: cleanObject(param) });

  useEffect(() => {
    run(fetchProjects(), { retry: fetchProjects });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return rest;
};

export const useEditProject = () => {
  const client = useHttp();

  const { run, ...rest } = useAsync();

  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: "PATCH",
      })
    );
  };
  return {
    mutate,
    ...rest,
  };
};

export const useAddProject = () => {
  const client = useHttp();

  const { run, ...rest } = useAsync();

  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, { data: params, method: "POST" })
    );
  };
  return {
    mutate,
    ...rest,
  };
};
