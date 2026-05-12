import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";

interface AboutProps {
  onBack: () => void;
}

export const About: React.FC<AboutProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  return (
    <Box flexDirection="column" marginY={1}>
      <Text>{chalk.bold.blue(portfolio.name)}</Text>
      <Text>{chalk.dim(portfolio.title)}</Text>
      <Text>{"\n"}</Text>
      <Text>{portfolio.about}</Text>
      <Text>{"\n"}</Text>
      <Text>{chalk.gray(navigationText)}</Text>
    </Box>
  );
};
