/*
 * @Author       : 胡昊
 * @Date         : 2021-08-09 09:10:54
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-20 18:24:46
 * @FilePath     : /jira/src/screens/project-list/list.tsx
 * @Description  :
 */
import { Table } from "antd";
import { User } from "./search-panel";

interface Project {
  id: number;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  users: User[];
  list: Project[];
}

const List = ({ users, list }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        { title: "名称", dataIndex: "name" },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((item) => item.id === project.personId)?.name ??
                  "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
export default List;
