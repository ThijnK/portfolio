import { Header } from "@/components/article";
import { cn } from "@/util/cn";
import Image from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";

type ProjectLogo = {
  src?: string;
  icon?: IconType;
  width?: number;
  height?: number;
};

export default function Project({
  title,
  children,
  className,
  logo,
  link,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  logo: ProjectLogo;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      <Header level={2}>
        <a
          href={link}
          className={cn("flex items-center gap-x-2 w-fit", className)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectLogo logo={logo} title={title} />
          <span>{title}</span>
        </a>
      </Header>
      {children}
    </div>
  );
}

function ProjectLogo({ logo, title }: { logo: ProjectLogo; title: string }) {
  if (logo.src)
    return (
      <Image
        src={logo.src}
        alt={`${title} Logo`}
        width={logo.width || 512}
        height={logo.height || 512}
        className="inline-block size-8"
      />
    );

  if (logo.icon) return <logo.icon className="size-6 text-foreground/80" />;

  return <></>;
}
