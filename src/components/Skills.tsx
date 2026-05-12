import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";

interface SkillsProps {
  onBack: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  return (
    <Box flexDirection="column" marginY={1}>
      <Text>{chalk.bold.blue("Technical Skills")}</Text>
      <Text>{"\n"}</Text>
      <Box flexDirection="row" flexWrap="wrap" gap={1}>
        {portfolio.skills.map((skill, index) => (
          <Text key={index}>{chalk.cyan(`• ${skill}`)}</Text>
        ))}
      </Box>
      <Text>{"\n"}</Text>
      <Text>{chalk.gray(navigationText)}</Text>
    </Box>
  );
};
