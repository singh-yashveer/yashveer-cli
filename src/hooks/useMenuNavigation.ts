import { useEffect } from "react";
import { useInput } from "ink";

export const useMenuNavigation = (onBack: () => void) => {
  useInput((input, key) => {
    if (key.escape) {
      onBack();
    }

    if (input === "q") {
      process.exit(0);
    }
  });

  useEffect(() => {
    // keep the section active and avoid auto-quitting from a previous Enter keypress
    const timeout = setTimeout(() => {}, 0);
    return () => clearTimeout(timeout);
  }, []);

  return {
    navigationText: "Press [ESC] Back or [q] Quit",
  };
};
