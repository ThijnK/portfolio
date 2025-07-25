import { Article, ButtonLink, Div, List, Section } from "@/components/article";
import { Icon } from "@/components/icons";
import { cn } from "@/util/cn";
import { MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

export default function Projects() {
  return (
    <Article title="Resume">
      <ButtonLink href="/resume/CV_Thijn.pdf" download>
        <Icon icon="download" className="size-5 shrink-0" />
        <span>Full Version (PDF)</span>
      </ButtonLink>

      <Section title="Experience" badge={{ icon: "experience" }}>
        <div>
          <WithSidebar thick>
            <div className="flex items-center justify-between font-bold">
              <p>QuickCode</p>
              <p className="text-sm">2021 - Present</p>
            </div>
            <p className="italic">Freelance Developer</p>
          </WithSidebar>
          <WithSidebar>
            <List>
              <li>Deliver custom software solutions for clients.</li>
              <li>
                Responsible for full project lifecycle: requirements gathering,
                architecture, implementation, testing, and deployment.
              </li>
              <li>
                Technologies: TypeScript, Node.js, React, Next.js, Express, SQL.
              </li>
            </List>
          </WithSidebar>
        </div>
      </Section>

      <Section title="Education" badge={{ icon: "education" }}>
        <div>
          <WithSidebar thick>
            <Split left="Utrecht University" right="2023 - 2025" bold />
            <Split left="MSc Computer Science" right="Master" italic />
            <p>Magna Cum Laude (8.61/10)</p>
          </WithSidebar>
          <WithSidebar>
            <List>
              <li>Specialization in Programming Technology.</li>
              <li>
                Relevant courses: Program Semantics & Verification (9.1),
                Language Based Security (9.57), Cloud & Edge Computing (9.1).
              </li>
              <li>
                Thesis: Dynamic symbolic execution for automated Java test
                generation (8.8).
              </li>
            </List>
          </WithSidebar>
        </div>

        <div>
          <WithSidebar thick>
            <Split left="Utrecht University" right="2020 - 2023" bold />
            <Split left="BSc Computer Science" right="Bachelor" italic />
            <p>Magna Cum Laude (8.96/10)</p>
          </WithSidebar>
          <WithSidebar>
            <List>
              <li>
                Completed the selective honors program for high-achieving
                students.
              </li>
              <li>
                Relevant courses: Web Technology (9.3), Databases (8.6), Data
                Structures (10), Modelling & System Development (9.4),
                Functional Programming (10), Security (9.7), Concurrency (9.2),
                Languages & Compilers (9.8), Software Testing & Verification
                (9.4), Graphics (9.5).
              </li>
            </List>
          </WithSidebar>
        </div>

        <div>
          <WithSidebar thick>
            <Split left="Minkema College" right="2014 - 2020" bold />
            <Split
              left="E&M with Maths B and Informatics"
              right="Secondary Education"
              italic
            />
          </WithSidebar>
        </div>
      </Section>
    </Article>
  );
}

function WithSidebar({
  thick = false,
  children,
  className,
  ...props
}: {
  thick?: boolean;
} & HTMLAttributes<HTMLElement> &
  MotionProps) {
  return (
    <Div
      className={cn("relative pl-4", !thick && "pt-2", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-px h-full bg-foreground/15",
          thick && "w-[3px]"
        )}
      />
      {children}
    </Div>
  );
}

function Split({
  left,
  right,
  bold = false,
  italic = false,
  className,
  ...props
}: { left: string; right: string; bold?: boolean; italic?: boolean } & Omit<
  HTMLAttributes<HTMLElement>,
  "children"
>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        bold && "font-bold",
        className
      )}
      {...props}
    >
      <p className={cn(italic && "italic")}>{left}</p>
      <p className="text-sm text-right">{right}</p>
    </div>
  );
}
