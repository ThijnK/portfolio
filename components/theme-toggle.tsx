"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { HTMLAttributes } from "react";
import { cn } from "@/util/cn";

export default function ThemeToggle({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex size-6 items-center justify-center rounded-md text-foreground/70 transition-colors duration-150 hover:cursor-pointer hover:text-foreground",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
      {...props}
    >
      <Sun className="h-6 w-[1.3rem] shrink-0 transition-all duration-200 dark:rotate-90 dark:opacity-0" />
      <Moon className="-rotate-90 absolute size-5 shrink-0 opacity-0 transition-all duration-200 dark:rotate-0 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
