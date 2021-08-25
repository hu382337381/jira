/*
 * @Author       : 胡昊
 * @Date         : 2021-08-11 14:44:32
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-25 17:53:28
 * @FilePath     : /jira/src/utils/index.ts
 * @Description  :
 */

import { useEffect, useRef, useState } from "react";

export const isVoid = (value: any) => [null, undefined, ""].includes(value);

export const cleanObject = (object: { [key: string]: unknown }) => {
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
  }, [callback]);
};

export const useDebounce = <V>(value: V, delay: number) => {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setDebounceVal(value);
    }, delay);
    return () => clearInterval(timer);
  }, [delay, value]);

  return debounceVal;
};

export const useArray = <T>(param: T[]) => {
  const [value, setValue] = useState(param);

  const add = (item: T) => {
    setValue([...value, item]);
  };
  const removeIdex = (index: number) => {
    const a = [...value];
    a.splice(index, 1);
    setValue([...a]);
  };
  const clear = () => setValue([]);
  return { value, setValue, add, removeIdex, clear };
};

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oleTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oleTitle;
      }
    };
  }, [keepOnUnmount, oleTitle]);
};

export const resetRoute = () => {
  window.location.href = window.location.origin;
};

export const subset = <
  O extends { [key in string]: unknown },
  K extends keyof O
>(
  obj: O,
  keys: K[]
) => {
  const filteredEntries = Object.entries(obj).filter(([key]) =>
    keys.includes(key as K)
  );
  return Object.fromEntries(filteredEntries) as Pick<O, K>;
};
