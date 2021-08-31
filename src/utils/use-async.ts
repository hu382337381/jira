/*
 * @Author       : 胡昊
 * @Date         : 2021-08-23 16:00:17
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 14:22:06
 * @FilePath     : /jira/src/utils/use-async.ts
 * @Description  :
 */
import { Dispatch, useCallback, useReducer, useState } from "react";
import { useMountedRef } from "utils";

interface State<D> {
  error: Error | null;
  data: D | null;
  status: "idle" | "loading" | "error" | "success";
}

const defaultInitState: State<null> = {
  error: null,
  data: null,
  status: "idle",
};

const defaultConfig = {
  throwOnError: false,
};

const reducer = <D>(state: State<D>, action: Partial<State<D>>) => ({
  ...state,
  ...action,
});

const useSafeDispatch = <T>(dispatch: (args: T) => void) => {
  const mountedRef = useMountedRef();

  return useCallback(
    (args) => {
      mountedRef.current ? dispatch(args) : void 0;
    },
    [dispatch, mountedRef]
  );
};

export const useAsync = <D>(
  initState?: State<D>,
  initConfig?: typeof defaultConfig
) => {
  const config = { ...defaultConfig, ...initConfig };

  const [state, dispatch] = useReducer(reducer, {
    ...defaultInitState,
    ...initState,
  }) as [State<D>, Dispatch<Partial<State<D>>>];

  const safeDispatch = useSafeDispatch(dispatch);
  // useState直接传入函数的含义是：惰性初始化；所以，要用useState保存函数，不能直接传入函数
  // https://codesandbox.io/s/blissful-water-230u4?file=/src/App.js
  const [retry, setRetry] = useState(() => () => {});

  const setData = useCallback(
    (data: D) => {
      safeDispatch({
        data,
        error: null,
        status: "success",
      });
    },
    [safeDispatch]
  );

  const setError = useCallback(
    (error: Error) => {
      safeDispatch({
        data: null,
        error,
        status: "error",
      });
    },
    [safeDispatch]
  );

  const run = useCallback(
    (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
      if (!promise || !promise.then) {
        throw new Error("请传入 Promise 类型数据");
      }
      safeDispatch({ status: "loading" });

      setRetry(() => () => {
        if (runConfig?.retry) {
          run(runConfig?.retry(), runConfig);
        }
      });

      return promise
        .then((data) => {
          setData(data);
          return data;
        })
        .catch((error) => {
          //catch 会消化异常，如果不主动抛出，外面试接收不到异常的
          setError(error);
          if (config.throwOnError) return Promise.reject(error);
          return error;
        });
    },
    [config.throwOnError, safeDispatch, setData, setError]
  );

  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    run,
    setData,
    setError,
    //retry被调用时重写跑一遍run，让state刷新一遍
    retry,
    ...state,
  };
};
