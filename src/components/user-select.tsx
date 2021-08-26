/*
 * @Author       : 胡昊
 * @Date         : 2021-08-26 17:45:13
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-26 17:47:46
 * @FilePath     : /jira/src/components/user-select.tsx
 * @Description  :
 */

import { ComponentProps } from "react";
import { useUser } from "utils/user";
import IdSelect from "./id-select";

const UserSelect = (props: ComponentProps<typeof IdSelect>) => {
  const { data } = useUser();
  return <IdSelect options={data || []} {...props} />;
};

export default UserSelect;
