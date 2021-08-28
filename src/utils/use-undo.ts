/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 15:30:11
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 16:22:44
 * @FilePath     : /jira/src/utils/use-undo.ts
 * @Description  :
 */

import { useCallback, useState } from "react";

export const useUndo = <T>(initValue: T) => {
  const [state, setState] = useState<{ past: T[]; present: T; future: T[] }>({
    past: [],
    present: initValue,
    future: [],
  });

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  const undo = useCallback(() => {
    setState((preState) => {
      const { past, present, future } = preState;

      if (past.length === 0) return preState;

      return {
        past: past.slice(0, -1),
        present: past[past.length - 1],
        future: [present, ...future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setState((preState) => {
      const { past, present, future } = preState;
      if (future.length === 0) return preState;

      return {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
    });
  }, []);

  const set = useCallback((newVal: T) => {
    setState((preState) => {
      const { past, present } = preState;
      if (present === newVal) return preState;
      return {
        past: [...past, present],
        present: newVal,
        future: [],
      };
    });
  }, []);

  const reset = useCallback((newVal: T) => {
    setState(() => ({
      past: [],
      present: newVal,
      future: [],
    }));
  }, []);

  return [state, { set, reset, undo, redo, canRedo, canUndo }];
};
