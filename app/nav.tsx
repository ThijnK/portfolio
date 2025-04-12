import Link from "next/link";
import { HTMLAttributes } from "react";

export default function Nav(props: HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props}>
      <nav className="text-xs sm:text-sm sm:my-1 italic xs:text-right">
        <ul className="flex xs:flex-col gap-x-4 gap-y-2 w-full xs:w-fit">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
