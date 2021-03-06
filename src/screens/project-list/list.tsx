/*
 * @Author       : 胡昊
 * @Date         : 2021-08-09 09:10:54
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 15:27:38
 * @FilePath     : /jira/src/screens/project-list/list.tsx
 * @Description  :
 */
import { Button, Dropdown, Menu, Table, TableProps, Typography } from "antd";
import { User } from "./search-panel";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Pin } from "components/pin";
import { useEditProject } from "utils/project";
import { ButtonNoPadding } from "components/lib";
import { ReactElement } from "react";

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
  refresh?: () => void;
  projectButton: ReactElement;
}

const List = ({ users, ...props }: ListProps) => {
  const { mutate } = useEditProject();
  const pinProject = (id: number) => (pin: boolean) =>
    mutate({ id, pin }).then(props.refresh);
  return (
    <Table
      pagination={false}
      rowKey="id"
      columns={[
        {
          title: <Pin checked={true} disabled={true} />,
          render: (value, project) => {
            return (
              <Pin
                checked={project.pin}
                onCheckedChange={pinProject(project.id)}
              />
            );
          },
        },
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
        {
          title: "操作",
          render: (value, project) => {
            return (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="edit">{props.projectButton}</Menu.Item>
                  </Menu>
                }
              >
                <Typography.Text>...</Typography.Text>
              </Dropdown>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
export default List;
