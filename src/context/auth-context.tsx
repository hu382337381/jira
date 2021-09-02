/*
 * @Author       : 胡昊
 * @Date         : 2021-08-12 17:54:02
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-09-02 09:34:22
 * @FilePath     : /jira/src/context/auth-context.tsx
 * @Description  :
 */
import * as auth from "auth-provider";
import { FullPageError, FullPageLoading } from "components/lib";
import { createContext, ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "screens/project-list/search-panel";
import { AppDispatch } from "store";
import * as authStore from "store/auth.slice";
import { bootstrap, selectUser } from "store/auth.slice";
import { useAppDispatch } from "store/hook";
import { http } from "utils/http";
import { useAsync } from "utils/use-async";

export interface AuthForm {
  username: string;
  password: string;
}

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToekn();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { run, error, isLoading, isIdle, isError } = useAsync<User | null>();

  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();

  useEffect(() => {
    run(dispatch(bootstrap()));
  }, [dispatch, run]);

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageError error={error} />;
  }

  return <div>{children}</div>;
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const login = useCallback(
    (form: AuthForm) => dispatch(authStore.login(form)),
    [dispatch]
  );
  const register = useCallback(
    (form: AuthForm) => dispatch(authStore.register(form)),
    [dispatch]
  );
  const logout = useCallback(() => dispatch(authStore.logout()), [dispatch]);
  return {
    user,
    login,
    register,
    logout,
  };
};
