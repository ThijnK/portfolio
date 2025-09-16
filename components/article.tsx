"use client";

import { cubicBezier, type MotionProps, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import {
  type AnchorHTMLAttributes,
  type ComponentProps,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Icon, type IconKey } from "@/components/icons";
import { cn } from "@/util/cn";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      ease: cubicBezier(0.2, 0.1, 0.3, 1),
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
  title,
  className,
  children,
  ...props
}: { title: string } & HTMLAttributes<HTMLElement> & MotionProps) {
  return (
    <motion.article
      animate="visible"
      className={cn("flex flex-col gap-y-6", className)}
      initial="hidden"
      variants={containerVariants}
      {...props}
    >
      <Header level={1}>{title}</Header>
      <div className="flex flex-col items-start gap-y-16">{children}</div>
    </motion.article>
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
  title?: string;
  badge?: ComponentProps<typeof SectionBadge>;
  href?: string;
} & HTMLAttributes<HTMLElement>) {
  const hasHeader = !!title || !!badge;
  const header = hasHeader ? (
    <Header className="flex items-center gap-x-3" level={2}>
      <SectionBadge {...badge} />
      <span>{title}</span>
    </Header>
  ) : null;

  return (
    <section className={cn("flex flex-col gap-y-5", className)} {...props}>
      {hasHeader && href ? (
        <a
          className="w-fit"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
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
  icon?: IconKey;
  className?: string;
}) {
  if (!badge) return null;
  if (badge.src)
    return (
      <Image
        alt={badge.label ?? "Section Badge"}
        className={cn("inline-block size-8", badge.className)}
        height={badge.height || 512}
        src={badge.src}
        width={badge.width || 512}
      />
    );

  if (badge.icon)
    return (
      <Icon
        className={cn("size-6 shrink-0 text-foreground/80", badge.className)}
        icon={badge.icon}
      />
    );

  return null;
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
        level === 1 && "mb-2 text-lg md:text-xl",
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

export function Div(
  props: HTMLAttributes<HTMLElement> & MotionProps & { className?: string }
) {
  return <motion.div variants={childVariants} {...props} />;
}

export function List({
  className,
  ...props
}: HTMLAttributes<HTMLElement> & MotionProps) {
  return (
    <motion.ul
      className={cn("list-disc space-y-0.5 pl-5", className)}
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
        "after:-z-[1] after:-bottom-px after:-inset-x-px relative after:pointer-events-none after:absolute after:top-0 after:origin-bottom after:scale-y-[0.05] after:bg-foreground after:transition-transform after:duration-150 hover:text-background hover:transition-colors hover:duration-150 hover:after:scale-none",
        className
      )}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
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
      className="flex items-center justify-center"
      variants={childVariants}
    >
      {/** biome-ignore lint/nursery/useAnchorHref: <href is provided in props> */}
      <a
        className={cn(
          "after:-z-[1] hover:after:translate-0 relative inline-flex items-center gap-x-2 overflow-hidden border border-foreground/90 px-3 py-1 transition-transform duration-200 after:pointer-events-none after:absolute after:inset-0 after:bg-foreground/90 after:transition-transform after:duration-200 hover:text-background hover:transition-colors active:scale-95",
          origins[origin] === "top" && "after:-translate-y-full",
          origins[origin] === "right" && "after:translate-x-full",
          origins[origin] === "bottom" && "after:translate-y-full",
          origins[origin] === "left" && "after:-translate-x-full",
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
}
