"use client";

import { cn } from "@/util/cn";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";
import NextLink from "next/link";

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
  return (
    <motion.div
      variants={childVariants}
      className="flex items-center justify-center"
    >
      <a
        className={cn(
          "inline-flex gap-x-2 relative items-center border border-foreground/90 px-3 py-1 transition-transform duration-150 active:scale-95 hover:transition-colors hover:text-background after:absolute after:-z-[1] after:inset-0 after:scale-y-0 after:origin-top after:bg-foreground/90 after:transition-transform after:duration-150 after:pointer-events-none hover:after:scale-none",
          className
        )}
        {...props}
      />
    </motion.div>
  );
}
