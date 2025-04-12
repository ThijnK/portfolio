import Link from "next/link";
import { HTMLAttributes } from "react";

export default function Nav(props: HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props}>
      <nav className="text-xs xs:text-sm italic">
        <ul className="flex xs:flex-col gap-x-4 gap-y-2 justify-end">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
