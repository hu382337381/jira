/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 14:46:21
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 17:26:06
 * @FilePath     : /jira/src/screens/project-list/project-modal.tsx
 * @Description  :
 */

import { Button, Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  closeProjectModal,
  selectProjectModalOpen,
} from "./project-list.slice";

const ProjectModal = () => {
  const projectModalOpen = useSelector(selectProjectModalOpen);
  const dispatch = useDispatch();

  return (
    <Drawer
      onClose={() => dispatch(closeProjectModal())}
      visible={projectModalOpen}
      width="100%"
    >
      <h1>Project Modal</h1>
      <Button onClick={() => dispatch(closeProjectModal())}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
