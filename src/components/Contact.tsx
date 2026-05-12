import React, { useState } from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useRevealContent } from "../hooks/useRevealContent.js";
import { useInput } from "ink";

interface ContactProps {
  onBack: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [showMenu, setShowMenu] = useState(false);

  const lines: React.ReactNode[] = [
    <Text key="title">{chalk.bold.blue("Get in Touch")}</Text>,
    <Text key="subtitle">{chalk.dim("Reach out on socials for collaborations or questions")}</Text>,
    <Text key="spacer1">{"\n"}</Text>,
    <Text key="github">
      {chalk.cyan("GitHub:")} {chalk.white(`github.com/${portfolio.socials.github}`)}
    </Text>,
    <Text key="linkedin">
      {chalk.cyan("LinkedIn:")} {chalk.white(`linkedin.com/in/${portfolio.socials.linkedin}`)}
    </Text>,
    <Text key="twitter">
      {chalk.cyan("Twitter:")} {chalk.white(`twitter.com/${portfolio.socials.twitter.slice(1)}`)}
    </Text>,
    <Text key="instagram">
      {chalk.cyan("Instagram:")} {chalk.white(`instagram.com/${portfolio.socials.instagram.slice(1)}`)}
    </Text>,
    <Text key="spacer2">{"\n"}</Text>,
  ];

  const visibleCount = useRevealContent(lines.length, 80);

  const contactItems = [
    { label: `GitHub: ${portfolio.socials.github}`, value: "github" },
    { label: `LinkedIn: ${portfolio.socials.linkedin}`, value: "linkedin" },
    { label: `Twitter: ${portfolio.socials.twitter}`, value: "twitter" },
    { label: `Instagram: ${portfolio.socials.instagram}`, value: "instagram" },
    { label: "Back to Menu", value: "back" },
    { label: "Quit", value: "quit" },
  ];

  useInput((input, key) => {
    if (key.escape) {
      onBack();
    }
    if (input === "q") {
      process.exit(0);
    }
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box flexDirection="column" marginY={1} borderStyle="round" borderColor="green" paddingLeft={1} paddingRight={1} paddingTop={1} paddingBottom={1}>
      {lines.slice(0, visibleCount)}
      {showMenu && (
        <Box marginTop={1}>
          <SelectInput
            items={contactItems}
            onSelect={(item: { label: string; value: string }) => {
              if (item.value === "back") {
                onBack();
              } else if (item.value === "quit") {
                process.exit(0);
              }
            }}
          />
        </Box>
      )}
      {!showMenu && <Text>{chalk.gray("Loading socials...")}</Text>}
    </Box>
  );
};
