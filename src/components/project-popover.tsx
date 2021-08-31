/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 14:34:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-31 17:40:24
 * @FilePath     : /jira/src/components/project-popover.tsx
 * @Description  :
 */

import styled from "@emotion/styled";
import { Divider, List, Popover, Typography } from "antd";
import { useDispatch } from "react-redux";
import { openProjectModal } from "screens/project-list/project-list.slice";
import { useProject } from "utils/project";
import { ButtonNoPadding } from "./lib";

const ProjectPopover = () => {
  const { data: projects } = useProject();
  const pinnedProjects = projects?.filter((project) => project.pin);

  const dispatch = useDispatch();

  const content = (
    <ContentContainer>
      <Typography.Text type="secondary">收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item key={project.id}>
            <List.Item.Meta title={project.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding type="link" onClick={() => dispatch(openProjectModal())}>
        创建项目
      </ButtonNoPadding>
    </ContentContainer>
  );

  return (
    <Popover placement="bottom" content={content}>
      <span>项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;

export default ProjectPopover;
