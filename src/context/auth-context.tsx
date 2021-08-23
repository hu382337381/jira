/*
 * @Author       : 胡昊
 * @Date         : 2021-08-12 17:54:02
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-23 10:03:03
 * @FilePath     : /jira/src/context/auth-context.tsx
 * @Description  :
 */
import * as auth from "auth-provider";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
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
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useEffect(() => {
    bootstrapUser().then(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
