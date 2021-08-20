/*
 * @Author       : 胡昊
 * @Date         : 2021-08-20 11:49:51
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-20 14:53:08
 * @FilePath     : /jira/src/components/lib.tsx
 * @Description  :
 */

import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) =>
    props.marginBottom !== undefined ? props.marginBottom + "rem" : undefined};

  > * {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;
