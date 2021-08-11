/*
 * @Author       : 胡昊
 * @Date         : 2021-08-11 14:44:32
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-11 15:04:23
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
