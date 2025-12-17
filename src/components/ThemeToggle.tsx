import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Theme = "light" | "dark" | "auto";

type Props = {
  isSystemDefaultVisible?: boolean;
};

const ThemeToggle = ({ isSystemDefaultVisible = false }: Props) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "auto";
    return (localStorage.getItem("theme") as Theme) || "auto";
  });

  const [prefersDark, setPrefersDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Watch system preference for auto mode
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setPrefersDark(e.matches);
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // auto
      prefersDark ? root.classList.add("dark") : root.classList.remove("dark");
      localStorage.setItem("theme", "auto");
    }
  }, [theme, prefersDark]);

  // Decide button label
  const toggleLabel =
    theme === "auto"
      ? prefersDark
        ? "🌞"
        : "🌙"
      : theme === "dark"
      ? "🌞"
      : "🌙";

  // Handle toggle click
  const handleToggle = () => {
    if (theme === "auto") {
      setTheme(prefersDark ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div className="flex items-center gap-1 cursor-pointer">
      {/* Light/Dark toggle button */}
      <button
        type="button"
        onClick={handleToggle}
        className={twMerge("cursor-pointer text-sm")}
      >
        {toggleLabel}
      </button>

      {/* Auto mode button */}
      {isSystemDefaultVisible && (
        <button
          type="button"
          onClick={() => setTheme("auto")}
          className={twMerge("cursor-pointer text-sm")}
        >
          🖥️
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
