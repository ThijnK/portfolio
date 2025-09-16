"use client";

import { motion } from "framer-motion";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import { Icon, type IconKey } from "@/components/icons";
import { cn } from "@/util/cn";

const links: {
  href: string;
  label: string;
  icon: IconKey;
}[] = [
  {
    href: "https://github.com/ThijnK",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/thijn-kroon",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "mailto:mail@thijnkroon.nl",
    label: "Email",
    icon: "email",
  },
  {
    href: "https://discord.com/users/259389639784267786",
    label: "Discord",
    icon: "discord",
  },
] as const;

/** Vertical padding of page's content, as defined by the styling of the main element in RootLayout */
const getContentPadding = (windowWidth: number) => {
  if (windowWidth > 768) return 80;
  if (windowWidth > 640) return 40;
  return 24;
};

export default function SocialLinks({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const divRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Update height of the divider
  useEffect(() => {
    const updateHeight = () => {
      const contentHeight = divRef.current?.nextElementSibling?.clientHeight;
      const linksHeight = linksRef.current?.clientHeight;
      if (!(contentHeight && linksHeight)) return;

      const maxHeight =
        window.innerHeight -
        2 * getContentPadding(window.innerWidth) -
        linksHeight;
      setHeight(Math.max(0, Math.min(maxHeight, contentHeight - linksHeight)));
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Use MutationObserver to detect DOM changes
    const observer = new MutationObserver(updateHeight);
    if (divRef.current?.parentElement) {
      observer.observe(divRef.current.parentElement, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={cn("flex xs:flex-col items-center gap-x-2", className)}
      {...props}
      ref={divRef}
    >
      <div className="xs:hidden h-px w-full bg-foreground/15" />
      <motion.div
        animate={{ height }}
        className="xs:block hidden w-px bg-foreground/15"
        transition={{
          duration: 0.4,
          ease: [0.2, 0.1, 0.3, 1],
        }}
      />
      <div className="flex w-fit xs:flex-col gap-2.5 xs:pt-2" ref={linksRef}>
        {links.map((link) => (
          <a
            aria-label={link.label}
            className="text-foreground/60 transition-colors duration-150 hover:text-foreground"
            href={link.href}
            key={link.label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="size-[19px] shrink-0" icon={link.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}
