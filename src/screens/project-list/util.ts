/*
 * @Author       : 胡昊
 * @Date         : 2021-08-26 17:52:58
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-26 18:05:48
 * @FilePath     : /jira/src/screens/project-list/util.ts
 * @Description  :
 */

import { useMemo } from "react";
import { useUrlQueryParam } from "utils/url";

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);

  return [
    useMemo(() => {
      return {
        ...param,
        personId: Number(param.personId) || undefined,
      };
    }, [param]),
    setParam,
  ] as const;
};
