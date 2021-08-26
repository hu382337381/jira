/*
 * @Author       : 胡昊
 * @Date         : 2021-08-26 16:37:51
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-26 18:04:03
 * @FilePath     : /jira/src/components/id-select.tsx
 * @Description  :
 */

import { Select } from "antd";
import { ComponentProps } from "react";
import { Raw } from "types";

type SelectProps = ComponentProps<typeof Select>;

interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: Raw | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

const IdSelect = (props: IdSelectProps) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;

  return (
    <Select
      value={options?.length ? toNumber(value) : 0}
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...restProps}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option value={option.id} key={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

export default IdSelect;
