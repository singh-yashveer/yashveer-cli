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
    <Box flexDirection="column">
      <Text>{chalk.cyan(title)}</Text>
      <Text>{chalk.yellow("Software Engineer | Frontend Specialist")}</Text>
    </Box>
  );
};
