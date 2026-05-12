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
    <Box flexDirection="column" marginY={1}>
      <Text>{chalk.bold.green("What would you like to explore?")}</Text>
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
  );
};
