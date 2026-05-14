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

  // ASCII art portrait
  const portrait = [
    "      ▄▄▄▄▄▄▄▄▄▄▄▄",
    "    ▄██████▀██████▄",
    "   ██▀      ▀      ▀██",
    "  ██   ◯  ◯   ◯  ◯   ██",
    "  ██  ━━━━━━━━━━━━━  ██",
    "  ██   ▄▄▄▄▄▄▄▄▄▄   ██",
    "   ██▄ ███████████ ▄██",
    "    ▀██████▄██████▀",
    "      ▄███████████▄",
    "     ██░░░████░░░██",
    "     ██░░░████░░░██",
    "      ▀████████████▀",
  ];

  return (
    <Box flexDirection="column" marginBottom={1}>
      {portrait.map((line, idx) => (
        <Text key={idx}>{chalk.cyan(line)}</Text>
      ))}
      <Text>{"\n"}</Text>
      <Text>{chalk.cyan(title)}</Text>
      <Text>{chalk.bold.hex("#FFD700")("Software Engineer specializing in web development infrastructure")}</Text>
      <Text>{chalk.gray("Build fast, polished web experiences with modern frontend architecture")}</Text>
      <Text>{chalk.gray("─".repeat(50))}</Text>
    </Box>
  );
};
