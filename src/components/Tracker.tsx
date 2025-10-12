// src/components/Tracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Tracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && "gtag" in window) {
      // TypeScript-safe call
      (
        window as Record<string, unknown> & {
          gtag: (...args: unknown[]) => void;
        }
      ).gtag("config", "G-KEREKMRFVL", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component renders nothing
};

export default Tracker;
