import React from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";
import chalk from "chalk";

interface MenuProps {
  onSelect: (selection: "about" | "skills" | "work" | "projects" | "contact") => void;
}

export const Menu: React.FC<MenuProps> = ({ onSelect }) => {
  const items = [
    { label: "About", value: "about" },
    { label: "Skills", value: "skills" },
    { label: "Work Experience", value: "work" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
    { label: "Quit", value: "quit" },
  ];

  return (
    <Box flexDirection="column" marginY={1} paddingLeft={1} paddingRight={1} paddingTop={1} paddingBottom={1} borderStyle="round" borderColor="green">
      <Text>{chalk.bold.green("Welcome to my portfolio")}</Text>
      <Text>{chalk.dim("Use the arrow keys and Enter to browse sections.")}</Text>
      <Text>{chalk.gray("Explore About, Skills, Work, Projects, and Contact.")}</Text>
      <Box marginTop={1}>
        <SelectInput
          items={items}
          onSelect={(item: { label: string; value: string }) => {
            if (item.value === "quit") {
              process.exit(0);
            }
            onSelect(item.value as "about" | "skills" | "work" | "projects" | "contact");
          }}
        />
      </Box>
    </Box>
  );
};
