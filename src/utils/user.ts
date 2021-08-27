/*
 * @Author       : 胡昊
 * @Date         : 2021-08-23 17:13:17
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-27 15:08:41
 * @FilePath     : /jira/src/utils/user.ts
 * @Description  :
 */
import { cleanObject } from "utils";
import { useEffect } from "react";
import { User } from "screens/project-list/search-panel";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUser = (param?: Partial<User>) => {
  const client = useHttp();

  const { run, ...rest } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [client, param, run]);
  return rest;
};
