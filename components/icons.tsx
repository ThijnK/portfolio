import {
  FaBriefcase,
  FaBuffer,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { PiPathBold } from "react-icons/pi";

export const Icons = {
  discord: FaDiscord,
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  buffer: FaBuffer,
  maze: PiPathBold,
  experience: FaBriefcase,
};

export type IconKey = keyof typeof Icons;

export const Icon = ({
  icon,
  className,
  ...props
}: {
  icon: IconKey;
} & React.ComponentPropsWithoutRef<"svg">) => {
  const Comp = Icons[icon];
  return <Comp className={className} {...props} />;
};
