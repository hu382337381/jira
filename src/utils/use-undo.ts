/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 15:30:11
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-30 10:51:53
 * @FilePath     : /jira/src/utils/use-undo.ts
 * @Description  :
 */

import { useCallback, useReducer } from "react";

const enum ActionType {
  UNDO = "UNDO",
  REDO = "REDO",
  SET = "SET",
  RESET = "RESET",
}

type State<T> = {
  past: T[];
  present: T;
  future: T[];
};

type Action<T> = {
  type: ActionType;
  newPresent?: T;
};

const reducer = <T>(state: State<T>, action: Action<T>) => {
  const { past, present, future } = state;
  const { type, newPresent } = action;
  switch (type) {
    case ActionType.UNDO:
      if (past.length === 0) return state;
      return {
        past: past.slice(0, -1),
        present: past[past.length - 1],
        future: [present, future],
      };

    case ActionType.REDO:
      if (future.length === 0) return state;
      return {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };

    case ActionType.SET:
      if (present === newPresent) return state;
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    case ActionType.RESET:
      return {
        past: [],
        present: newPresent,
        future: [],
      };
    default:
      break;
  }
  return state;
};

export const useUndo = <T>(initValue: T) => {
  const [state, dispatch] = useReducer(reducer, {
    past: [],
    present: initValue,
    future: [],
  });

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  const undo = useCallback(() => {
    dispatch({ type: ActionType.UNDO });
  }, []);

  const redo = useCallback(() => {
    dispatch({ type: ActionType.REDO });
  }, []);

  const set = useCallback((newVal: T) => {
    dispatch({ type: ActionType.SET });
  }, []);

  const reset = useCallback((newVal: T) => {
    dispatch({ type: ActionType.RESET });
  }, []);

  return [state, { set, reset, undo, redo, canRedo, canUndo }];
};
