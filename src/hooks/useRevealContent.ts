import { useEffect, useState } from "react";

export const useRevealContent = (count: number, delay = 50) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= count) {
      return;
    }

    const timer = setTimeout(() => {
      setVisibleCount((current) => current + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleCount, count, delay]);

  return visibleCount;
};
