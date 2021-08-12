import { useCallback, useEffect, useState } from "react";

/*
 * @Author       : 胡昊
 * @Date         : 2021-08-11 14:44:32
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-12 15:31:43
 * @FilePath     : /jira/src/utils/index.ts
 * @Description  :
 */
export const isVoid = (value: any) => [null, undefined, ""].includes(value);

export const cleanObject = (object: { [key: string]: any }) => {
  const result = { ...object };
  Object.entries(result).forEach(([key, value]) => {
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value: unknown, delay: number): any => {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setDebounceVal(value);
    }, delay);
    return () => clearInterval(timer);
  }, [delay, value]);

  return debounceVal;
};
