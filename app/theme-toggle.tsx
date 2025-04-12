"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <LuSun className="h-6 w-[1.3rem] shrink-0 transition-all duration-200 dark:rotate-90 dark:opacity-0" />
      <LuMoon className="absolute size-5 shrink-0 -rotate-90 opacity-0 transition-all duration-200 dark:rotate-0 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
