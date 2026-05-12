import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";
import { useRevealContent } from "../hooks/useRevealContent.js";

interface WorkProps {
  onBack: () => void;
}

export const Work: React.FC<WorkProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  const lines: React.ReactNode[] = [
    <Text key="title">{chalk.bold.blue("Work Experience")}</Text>,
    <Text key="subtitle">{chalk.dim("Recent roles and impact")}</Text>,
    <Text key="spacer1">{"\n"}</Text>,
    ...portfolio.work.flatMap((job, index) => [
      <Box key={`job-${index}`} flexDirection="column" marginBottom={1}>
        <Text>{chalk.green.bold(job.title)}</Text>
        <Text>
          {chalk.yellow(job.company)} {chalk.dim(`• ${job.dates}`)}
        </Text>
        <Text>{job.description}</Text>
      </Box>,
      index < portfolio.work.length - 1 ? <Text key={`spacer-${index}`}>{"\n"}</Text> : null,
    ]),
    <Text key="spacer2">{"\n"}</Text>,
    <Text key="nav">{chalk.gray(navigationText)}</Text>,
  ].filter(Boolean) as React.ReactNode[];

  const visibleCount = useRevealContent(lines.length, 50);

  return (
    <Box
      flexDirection="column"
      marginY={1}
      borderStyle="round"
      borderColor="magenta"
      paddingLeft={1}
      paddingRight={1}
      paddingTop={1}
      paddingBottom={1}
    >
      {lines.slice(0, visibleCount)}
    </Box>
  );
};
