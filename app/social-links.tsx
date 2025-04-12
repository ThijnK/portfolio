import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function SocialLinks(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <SocialLink
        href="https://github.com/ThijnK"
        label="GitHub"
        icon={FaGithub}
      />
      <SocialLink
        href="https://www.linkedin.com/in/thijn-kroon"
        label="LinkedIn"
        icon={FaLinkedin}
      />
      <SocialLink
        href="mailto:mail@thijnkroon.nl"
        label="Email"
        icon={FaEnvelope}
      />
      <SocialLink
        href="https://discord.com/users/259389639784267786"
        label="Discord"
        icon={FaDiscord}
      />
    </div>
  );
}

function SocialLink({
  href,
  label,
  ...props
}: {
  href: string;
  label: string;
  icon: IconType;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-foreground/60 hover:text-foreground transition-colors duration-150"
    >
      <props.icon className="size-[19px]" />
    </a>
  );
}
