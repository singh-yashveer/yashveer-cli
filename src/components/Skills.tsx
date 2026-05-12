import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";
import { useRevealContent } from "../hooks/useRevealContent.js";

interface SkillsProps {
  onBack: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  const lines: React.ReactNode[] = [
    <Text key="title">{chalk.bold.blue("Technical Skills")}</Text>,
    <Text key="count">{chalk.dim(`• ${portfolio.skills.length} skills`)}</Text>,
    <Text key="spacer1">{"\n"}</Text>,
    ...portfolio.skills.map((skill) => <Text key={skill}>{chalk.cyan(`• ${skill}`)}</Text>),
    <Text key="spacer2">{"\n"}</Text>,
    <Text key="nav">{chalk.gray(navigationText)}</Text>,
  ];

  const visibleCount = useRevealContent(lines.length, 40);

  return (
    <Box flexDirection="column" marginY={1} borderStyle="round" borderColor="blue" paddingLeft={1} paddingRight={1} paddingTop={1} paddingBottom={1}>
      {lines.slice(0, visibleCount)}
    </Box>
  );
};
