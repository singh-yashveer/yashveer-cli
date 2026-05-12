import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import figlet from "figlet";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const title = figlet.textSync("YASHVEER", {
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  return (
    <Box flexDirection="column" marginBottom={1}>
      <Text>{chalk.cyan(title)}</Text>
      <Text>{chalk.bold.hex("#FFD700")("Software Engineer / Frontend Engineer")}</Text>
      <Text>{chalk.gray("Build fast, polished web experiences with modern frontend architecture")}</Text>
      <Text>{chalk.gray("─".repeat(50))}</Text>
    </Box>
  );
};
