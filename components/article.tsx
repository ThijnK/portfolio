import { cn } from "@/util/cn";
import { HTMLAttributes } from "react";

export default function Article({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn("flex flex-col gap-y-6", className)}
      {...props}
    ></article>
  );
}
