import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";

interface WorkProps {
  onBack: () => void;
}

export const Work: React.FC<WorkProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  return (
    <Box flexDirection="column" marginY={1}>
      <Text>{chalk.bold.blue("Work Experience")}</Text>
      <Text>{"\n"}</Text>
      {portfolio.work.map((job, index) => (
        <Box key={index} flexDirection="column" marginBottom={1}>
          <Text>
            {chalk.green.bold(job.title)} @ {chalk.yellow(job.company)}
          </Text>
          <Text>{chalk.dim(job.dates)}</Text>
          <Text>{job.description}</Text>
          {index < portfolio.work.length - 1 && <Text>{"\n"}</Text>}
        </Box>
      ))}
      <Text>{"\n"}</Text>
      <Text>{chalk.gray(navigationText)}</Text>
    </Box>
  );
};
