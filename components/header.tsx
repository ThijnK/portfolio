import { cn } from "@/util/cn";
import { HTMLAttributes } from "react";

export default function Header({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return <h1 className={cn("font-semibold", className)} {...props}></h1>;
}
