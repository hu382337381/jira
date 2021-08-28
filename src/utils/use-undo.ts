import { useState } from "react";

/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 15:30:11
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 15:51:44
 * @FilePath     : /jira/src/utils/use-undo.ts
 * @Description  :
 */
export const useUndo = <T>(initValue: T) => {
  const [present, setPresent] = useState(initValue);
  const [past, setPast] = useState<T[]>([]);
  const [future, setFuture] = useState<T[]>([]);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  const undo = () => {
    if (!canUndo) return;

    setFuture([present, ...future]);
    setPresent(past[past.length - 1]);
    setPast(past.slice(0, -1));
  };

  const redo = () => {
    if (!canRedo) return;

    setPast([...past, present]);
    setPresent(future[0]);
    setFuture(future.slice(1));
  };

  const set = (newVal: T) => {
    if (newVal === present) return;

    setPast([...past, newVal]);
    setPresent(newVal);
    setFuture([]);
  };

  const reset = (newVal: T) => {
    setPast([]);
    setPresent(newVal);
    setFuture([]);
  };

  return [
    { past, present, future },
    { set, reset, undo, redo, canRedo, canUndo },
  ];
};
