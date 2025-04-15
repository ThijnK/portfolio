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
  ...props
}: HTMLAttributes<HTMLElement> & MotionProps) {
  return (
    <motion.h1
      className={cn("font-semibold text-lg", className)}
      variants={childVariants}
      {...props}
    />
  );
}

export function Paragraph(props: HTMLAttributes<HTMLElement> & MotionProps) {
  return <motion.p variants={childVariants} {...props} />;
}

export function Link({
  external,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
  href: string;
}) {
  return (
    <span className={cn("relative", className)}>
      {external ? (
        <a target="_blank" rel="noopener noreferrer" {...props} />
      ) : (
        <NextLink {...props} />
      )}
      <span className="absolute w-full h-px bottom-0 bg-foreground left-0" />
    </span>
  );
}
