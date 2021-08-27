/*
 * @Author       : 胡昊
 * @Date         : 2021-08-27 09:33:53
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-27 09:37:00
 * @FilePath     : /jira/src/components/pin.tsx
 * @Description  :
 */

import { Rate } from "antd";
import { ComponentProps } from "react";

interface PinProps extends ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Pin = ({ checked, onCheckedChange, ...restProps }: PinProps) => {
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckedChange?.(!!num)}
      {...restProps}
    />
  );
};
