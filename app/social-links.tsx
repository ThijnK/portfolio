"use client";

import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "@/util/cn";

const links = [
  {
    href: "https://github.com/ThijnK",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/thijn-kroon",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "mailto:mail@thijnkroon.nl",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://discord.com/users/259389639784267786",
    label: "Discord",
    icon: FaDiscord,
  },
];

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
      if (!contentHeight || !linksHeight) return;

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
      <div className="h-px w-full bg-foreground/15 xs:hidden" />
      <motion.div
        className="bg-foreground/15 w-px hidden xs:block"
        animate={{ height }}
        transition={{
          duration: 0.4,
          ease: [0.2, 0.1, 0.3, 1],
        }}
      />
      <div ref={linksRef} className="flex xs:flex-col gap-2.5 w-fit xs:pt-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-foreground/60 hover:text-foreground transition-colors duration-150"
          >
            <link.icon className="size-[19px]" />
          </a>
        ))}
      </div>
    </div>
  );
}
