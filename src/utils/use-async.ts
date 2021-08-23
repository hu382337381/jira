/*
 * @Author       : 胡昊
 * @Date         : 2021-08-23 16:00:17
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-23 16:43:56
 * @FilePath     : /jira/src/utils/use-async.ts
 * @Description  :
 */
import { useState } from "react";

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

export const useAsync = <D>(initState?: State<D>) => {
  const [state, setState] = useState({
    ...defaultInitState,
    ...initState,
  });

  const setData = (data: D) => {
    setState({
      data,
      error: null,
      status: "success",
    });
  };

  const setError = (error: Error) => {
    setState({
      data: null,
      error,
      status: "error",
    });
  };

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入 Promise 类型数据");
    }
    setState({ ...state, status: "loading" });

    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
  };

  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    run,
    setData,
    setError,
    ...state,
  };
};
