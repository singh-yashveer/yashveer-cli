import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";
import { useRevealContent } from "../hooks/useRevealContent.js";

interface ProjectsProps {
  onBack: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  const lines: React.ReactNode[] = [
    <Text key="title">{chalk.bold.blue("Projects")}</Text>,
    <Text key="subtitle">{chalk.dim("Open source and UI-focused work")}</Text>,
    <Text key="spacer1">{"\n"}</Text>,
    ...portfolio.projects.flatMap((project, index) => [
      <Box key={`project-${index}`} flexDirection="column" marginBottom={1}>
        <Text>{chalk.green.bold(project.name)}</Text>
        <Text>{project.description}</Text>
        <Text>{chalk.cyan(`github.com/${project.github}/${project.name.toLowerCase()}`)}</Text>
      </Box>,
      index < portfolio.projects.length - 1 ? <Text key={`spacer-${index}`}>{"\n"}</Text> : null,
    ]),
    <Text key="spacer2">{"\n"}</Text>,
    <Text key="nav">{chalk.gray(navigationText)}</Text>,
  ].filter(Boolean) as React.ReactNode[];

  const visibleCount = useRevealContent(lines.length, 45);

  return (
    <Box
      flexDirection="column"
      marginY={1}
      borderStyle="round"
      borderColor="yellow"
      paddingLeft={1}
      paddingRight={1}
      paddingTop={1}
      paddingBottom={1}
    >
      {lines.slice(0, visibleCount)}
    </Box>
  );
};
