/*
 * @Author       : 胡昊
 * @Date         : 2021-08-25 14:19:11
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-25 18:01:20
 * @FilePath     : /jira/src/utils/url.ts
 * @Description  :
 */

import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObject, subset } from "utils";

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParam, setSearchParam] = useSearchParams();

  return [
    useMemo(() => {
      const d = keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParam.get(key) || "" };
      }, {} as { [key in K]: string });
      return d;
    }, [searchParam]),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObject({
        ...Object.fromEntries(searchParam),
        ...params,
      }) as URLSearchParamsInit;
      setSearchParam(o);
    },
  ] as const;
};
