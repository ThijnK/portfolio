"use client";

import { cn } from "@/util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

const items = [
  { href: "/", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
] as const;

export default function Nav(props: HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <aside {...props}>
      <nav className="sm:my-1 xs:text-right font-mono font-medium">
        <ul className="flex xs:flex-col gap-x-4 gap-y-2 w-full xs:w-fit">
          {items.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "text-foreground/60 hover:text-foreground transition-colors duration-150",
                    isActive && "text-foreground"
                  )}
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
