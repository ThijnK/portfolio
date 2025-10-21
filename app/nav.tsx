"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { HTMLAttributes } from "react";
import { cn } from "@/util/cn";

const items = [
  { href: "/", label: "about", external: false },
  { href: "/projects", label: "projects", external: false },
  { href: "/resume.pdf", label: "resume", external: true },
] as const;

export default function Nav(props: HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <aside {...props}>
      <nav className="xs:text-right font-medium font-mono sm:my-1">
        <ul className="flex w-full xs:w-fit xs:flex-col gap-x-4 gap-y-2">
          {items.map(({ href, label, external }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  className={cn(
                    "custom-cursor-ripple group relative text-foreground/60 transition-colors duration-150 hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                  href={href}
                  rel={external ? "noopener noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  {label}
                  {external && (
                    <ExternalLink className="-right-[1.15rem] absolute top-[3px] size-3.5 stroke-[2.5] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
