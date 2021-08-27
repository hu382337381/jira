/*
 * @Author       : 胡昊
 * @Date         : 2021-08-23 17:02:55
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-27 15:11:29
 * @FilePath     : /jira/src/utils/project.ts
 * @Description  :
 */

import { useCallback, useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();

  const { run, ...rest } = useAsync<Project[]>();

  const fetchProjects = useCallback(
    () => client("projects", { data: cleanObject(param || {}) }),
    [client, param]
  );

  useEffect(() => {
    run(fetchProjects(), { retry: fetchProjects });
  }, [fetchProjects, run]);

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
