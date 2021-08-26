/*
 * @Author       : 胡昊
 * @Date         : 2021-08-09 09:10:54
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-26 17:11:53
 * @FilePath     : /jira/src/screens/project-list/list.tsx
 * @Description  :
 */
import { Table, TableProps } from "antd";
import { User } from "./search-panel";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
  users: User[];
}

const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (value, project) => {
            return <Link to={`${project.id}`}>{value}</Link>;
          },
        },
        { title: "部门", dataIndex: "organization" },
        {
          title: "负责人",
          dataIndex: "personId",
          render(value, project) {
            return (
              <span>
                {users.find((item) => item.id === project.personId)?.name ??
                  "未知"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          dataIndex: "created",
          render(value, project) {
            return (
              <span>{value ? dayjs(value).format("YYYY-MM-DD") : "无"}</span>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
export default List;
