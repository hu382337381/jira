/*
 * @Author       : 胡昊
 * @Date         : 2021-09-01 11:03:08
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-09-01 15:23:43
 * @FilePath     : /jira/src/store/hook.ts
 * @Description  :
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
