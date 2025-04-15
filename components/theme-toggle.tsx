"use client";

import { cn } from "@/util/cn";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative inline-flex items-center justify-center hover:cursor-pointer rounded-md size-6 text-foreground/70 hover:text-foreground transition-colors duration-150",
        className
      )}
      {...props}
    >
      <LuSun className="h-6 w-[1.3rem] shrink-0 transition-all duration-200 dark:rotate-90 dark:opacity-0" />
      <LuMoon className="absolute size-5 shrink-0 -rotate-90 opacity-0 transition-all duration-200 dark:rotate-0 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
