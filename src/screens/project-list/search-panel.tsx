/*
 * @Author       : 胡昊
 * @Date         : 2021-08-09 09:13:30
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-26 18:06:05
 * @FilePath     : /jira/src/screens/project-list/search-panel.tsx
 * @Description  :
 */

import { Form, Input } from "antd";
import UserSelect from "components/user-select";
import { Project } from "./list";
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}

const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout="inline" style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
          defaultOptionName="负责人"
        />
      </Form.Item>
    </Form>
  );
};

export default SearchPanel;
