import React, { useState } from "react";
import { Box } from "ink";
import { Header } from "./components/Header.js";
import { Menu } from "./components/Menu.js";
import { About } from "./components/About.js";
import { Skills } from "./components/Skills.js";
import { Work } from "./components/Work.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";

type View = "menu" | "about" | "skills" | "work" | "projects" | "contact";

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("menu");

  const handleBackToMenu = () => {
    setCurrentView("menu");
  };

  const handleMenuSelect = (selection: "about" | "skills" | "work" | "projects" | "contact") => {
    setCurrentView(selection);
  };

  return (
    <Box flexDirection="column">
      <Header />
      {currentView === "menu" ? (
        <Menu onSelect={handleMenuSelect} />
      ) : currentView === "about" ? (
        <About onBack={handleBackToMenu} />
      ) : currentView === "skills" ? (
        <Skills onBack={handleBackToMenu} />
      ) : currentView === "work" ? (
        <Work onBack={handleBackToMenu} />
      ) : currentView === "projects" ? (
        <Projects onBack={handleBackToMenu} />
      ) : currentView === "contact" ? (
        <Contact onBack={handleBackToMenu} />
      ) : null}
    </Box>
  );
};
