"use client";

import { cn } from "@/util/cn";
import { HTMLAttributes } from "react";
import { motion, MotionProps } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      ease: [0.2, 0.1, 0.3, 1],
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
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
