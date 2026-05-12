import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";

interface ProjectsProps {
  onBack: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  return (
    <Box flexDirection="column" marginY={1}>
      <Text>{chalk.bold.blue("Projects")}</Text>
      <Text>{"\n"}</Text>
      {portfolio.projects.map((project, index) => (
        <Box key={index} flexDirection="column" marginBottom={1}>
          <Text>{chalk.green.bold(project.name)}</Text>
          <Text>{project.description}</Text>
          <Text>{chalk.cyan(`→ github.com/${project.github}/${project.name.toLowerCase()}`)}</Text>
          {index < portfolio.projects.length - 1 && <Text>{"\n"}</Text>}
        </Box>
      ))}
      <Text>{"\n"}</Text>
      <Text>{chalk.gray(navigationText)}</Text>
    </Box>
  );
};
