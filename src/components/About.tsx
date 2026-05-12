import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";
import { useRevealContent } from "../hooks/useRevealContent.js";

interface AboutProps {
  onBack: () => void;
}

export const About: React.FC<AboutProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  const lines: React.ReactNode[] = [
    <Text key="title">{chalk.bold.blue("About")}</Text>,
    <Text key="subtitle">{chalk.dim(portfolio.title)}</Text>,
    <Text key="spacer1">{"\n"}</Text>,
    <Text key="about">{portfolio.about}</Text>,
    <Text key="spacer2">{"\n"}</Text>,
    <Text key="nav">{chalk.gray(navigationText)}</Text>,
  ];

  const visibleCount = useRevealContent(lines.length, 70);

  return (
    <Box flexDirection="column" marginY={1} borderStyle="round" borderColor="cyan" paddingLeft={1} paddingRight={1} paddingTop={1} paddingBottom={1}>
      {lines.slice(0, visibleCount)}
    </Box>
  );
};
