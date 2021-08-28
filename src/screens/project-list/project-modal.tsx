/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 14:46:21
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 15:16:59
 * @FilePath     : /jira/src/screens/project-list/project-modal.tsx
 * @Description  :
 */

import { Button, Drawer } from "antd";

const ProjectModal = (props: {
  projectModalOpen: boolean;
  onClose: () => void;
}) => {
  const { onClose, projectModalOpen } = props;
  return (
    <Drawer onClose={onClose} visible={projectModalOpen} width="100%">
      <h1>Project Modal</h1>
      <Button onClick={onClose}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
