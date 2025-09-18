"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { HTMLAttributes } from "react";
import { cn } from "@/util/cn";

const items = [
  { href: "/", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
] as const;

export default function Nav(props: HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <aside {...props}>
      <nav className="xs:text-right font-medium font-mono sm:my-1">
        <ul className="flex w-full xs:w-fit xs:flex-col gap-x-4 gap-y-2">
          {items.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  className={cn(
                    "custom-cursor-ripple text-foreground/60 transition-colors duration-150 hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
