/*
 * @Author       : 胡昊
 * @Date         : 2021-08-24 09:44:46
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-24 10:18:26
 * @FilePath     : /jira/src/components/error-boundary.tsx
 * @Description  :
 */
import { Component, PropsWithChildren, ReactElement } from "react";

type FallbackRender = (props: { error: Error | null }) => ReactElement;

//github.com/bvaughn/react-error-boundary
export class ErrorBoundary extends Component<
  PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  //当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
