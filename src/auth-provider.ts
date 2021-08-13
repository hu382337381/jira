/*
 * @Author       : 胡昊
 * @Date         : 2021-08-12 17:41:49
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-13 09:37:32
 * @FilePath     : /jira/src/auth-provider.ts
 * @Description  :
 */
import { User } from "./screens/project-list/search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

export const getToekn = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    const res = await response.json();
    if (response.ok) {
      return handleUserResponse(res);
    } else {
      return Promise.reject(res);
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    const res = await response.json();
    if (response.ok) {
      return handleUserResponse(res);
    } else {
      return Promise.reject(res);
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
