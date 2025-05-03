"use client";

import { cn } from "@/util/cn";
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  useRef,
  useState,
  useEffect,
  ComponentProps,
} from "react";
import { motion, MotionProps } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import { Icon, IconType } from "@/components/icons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      ease: [0.2, 0.1, 0.3, 1],
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 13 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function Article({
  className,
  ...props
}: HTMLAttributes<HTMLElement> & MotionProps) {
  return (
    <motion.article
      className={cn("flex flex-col gap-y-6", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...props}
    />
  );
}

export function Section({
  title,
  children,
  className,
  badge,
  href,
  ...props
}: {
  title: string;
  badge?: ComponentProps<typeof SectionBadge>;
  href?: string;
} & HTMLAttributes<HTMLElement>) {
  const header = (
    <Header level={2} className="flex items-center gap-x-2">
      <SectionBadge {...badge} />
      <span>{title}</span>
    </Header>
  );

  return (
    <section className={cn("flex flex-col gap-y-4", className)} {...props}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          {header}
        </a>
      ) : (
        header
      )}
      {children}
    </section>
  );
}

function SectionBadge(badge: {
  src?: string;
  label?: string;
  width?: number;
  height?: number;
  icon?: IconType;
  className?: string;
}) {
  if (!badge) return <></>;
  if (badge.src)
    return (
      <Image
        src={badge.src}
        alt={badge.label ?? "Section Badge"}
        width={badge.width || 512}
        height={badge.height || 512}
        className={cn("inline-block size-8", badge.className)}
      />
    );

  if (badge.icon)
    return (
      <Icon
        icon={badge.icon}
        className={cn("size-6 shrink-0 text-foreground/80", badge.className)}
      />
    );

  return <></>;
}

export function Header({
  className,
  level = 1,
  ...props
}: HTMLAttributes<HTMLElement> &
  MotionProps & {
    level?: 1 | 2;
  }) {
  const Comp = level === 1 ? motion.h1 : motion.h2;

  return (
    <Comp
      className={cn(
        "font-semibold",
        level === 1 && "text-lg md:text-xl mb-2",
        level === 2 && "text-base md:text-lg",
        className
      )}
      variants={childVariants}
      {...props}
    />
  );
}

export function Paragraph(props: HTMLAttributes<HTMLElement> & MotionProps) {
  return <motion.p variants={childVariants} {...props} />;
}

export function List({
  className,
  ...props
}: HTMLAttributes<HTMLElement> & MotionProps) {
  return (
    <motion.ul
      className={cn("list-disc pl-5 space-y-0.5", className)}
      {...props}
    />
  );
}

export function ListItem(props: HTMLAttributes<HTMLElement> & MotionProps) {
  return <motion.li variants={childVariants} {...props} />;
}

export function Link({
  external,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
  href: string;
}) {
  const Comp = external ? "a" : NextLink;

  return (
    <Comp
      className={cn(
        "relative hover:text-background hover:transition-colors hover:duration-150 after:absolute after:-z-[1] after:top-0 after:-bottom-px after:-inset-x-px after:origin-bottom after:scale-y-[0.05] after:bg-foreground after:transition-transform after:duration-150 after:pointer-events-none hover:after:scale-none",
        className
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const origins = ["top", "right", "bottom", "left"] as const;
  const [origin, setOrigin] = useState(0);

  // Move the origin of the hover animation after each hover
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
        setOrigin((prev) => (prev + 1) % origins.length);
        timeoutId = null;
      }, 200);
    };

    const handleMouseLeave = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    if (ref.current) {
      const target = ref.current;
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [origins.length]);

  return (
    <motion.div
      variants={childVariants}
      className="flex items-center justify-center"
    >
      <a
        ref={ref}
        className={cn(
          "inline-flex gap-x-2 relative overflow-hidden items-center border border-foreground/90 px-3 py-1 transition-transform duration-200 active:scale-95 hover:transition-colors hover:text-background after:absolute after:-z-[1] after:inset-0 after:bg-foreground/90 after:transition-transform after:duration-200 after:pointer-events-none hover:after:translate-0",
          origins[origin] === "top" && "after:-translate-y-full",
          origins[origin] === "right" && "after:translate-x-full",
          origins[origin] === "bottom" && "after:translate-y-full",
          origins[origin] === "left" && "after:-translate-x-full",
          className
        )}
        {...props}
      />
    </motion.div>
  );
}
