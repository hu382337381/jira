/*
 * @Author       : 胡昊
 * @Date         : 2021-08-28 14:34:14
 * @LastEditors  : 胡昊
 * @LastEditTime : 2021-08-28 15:24:51
 * @FilePath     : /jira/src/components/project-popover.tsx
 * @Description  :
 */

import styled from "@emotion/styled";
import { Divider, List, Popover, Typography } from "antd";
import { ReactElement } from "react";
import { useProject } from "utils/project";

const ProjectPopover = (props: { projectButton: ReactElement }) => {
  const { data: projects } = useProject();
  const pinnedProjects = projects?.filter((project) => project.pin);

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
      {props.projectButton}
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
