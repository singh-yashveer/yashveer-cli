import React from "react";
import { Box, Text } from "ink";
import chalk from "chalk";
import { portfolio } from "../data/portfolio.js";
import { useMenuNavigation } from "../hooks/useMenuNavigation.js";

interface ContactProps {
  onBack: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const { navigationText } = useMenuNavigation(onBack);

  return (
    <Box flexDirection="column" marginY={1}>
      <Text>{chalk.bold.blue("Get in Touch")}</Text>
      <Text>{"\n"}</Text>
      <Text>
        {chalk.cyan("GitHub:")} {chalk.white(`github.com/${portfolio.socials.github}`)}
      </Text>
      <Text>
        {chalk.cyan("LinkedIn:")} {chalk.white(`linkedin.com/in/${portfolio.socials.linkedin}`)}
      </Text>
      <Text>
        {chalk.cyan("Twitter:")} {chalk.white(`twitter.com/${portfolio.socials.twitter.slice(1)}`)}
      </Text>
      <Text>
        {chalk.cyan("Instagram:")} {chalk.white(`instagram.com/${portfolio.socials.instagram.slice(1)}`)}
      </Text>
      <Text>{"\n"}</Text>
      <Text>{chalk.gray(navigationText)}</Text>
    </Box>
  );
};
