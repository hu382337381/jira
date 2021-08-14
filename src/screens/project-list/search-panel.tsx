/*
 * @Author       : 胡昊
 * @Date         : 2021-08-09 09:13:30
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-14 10:29:29
 * @FilePath     : /jira/src/screens/project-list/search-panel.tsx
 * @Description  :
 */
import { Form, Input, Select } from "antd";
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form>
      <Input
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <Select
        value={param.personId}
        onChange={(value) =>
          setParam({
            ...param,
            personId: value,
          })
        }
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    </Form>
  );
};

export default SearchPanel;
