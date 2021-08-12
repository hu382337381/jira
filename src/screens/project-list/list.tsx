/*
 * @Author       : 胡昊
 * @Date         : 2021-08-09 09:10:54
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-12 15:30:40
 * @FilePath     : /jira/src/screens/project-list/list.tsx
 * @Description  :
 */
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
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((item) => item.id === project.personId)?.name ??
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default List;
