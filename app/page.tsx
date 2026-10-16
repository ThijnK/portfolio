import { Article, Link, Paragraph, Section } from "@/components/article";

export default function Home() {
  return (
    <Article title="Thijn Kroon">
      <Section>
        <Paragraph>
          Hi, I’m Thijn, a full-stack engineer with an eye for detail and a
          slightly excessive desire to get things just right. Outside of work, I
          like to run, read, and occasionally lose track of time gaming.
        </Paragraph>
        <Paragraph>
          I’m a founding engineer at{" "}
          <Link external href="https://www.minerva.io">
            Minerva
          </Link>
          , where I work across product development and systems architecture for
          our data and AI platform. I’m responsible for authentication and
          authorization, billing systems, and third-party integrations. Before
          Minerva, I co-founded{" "}
          <Link external href="https://quickcode.agency">
            QuickCode
          </Link>
          , a small developer agency building web apps, dashboards, and
          automation tools for clients. I also earned a bachelor’s and master’s
          in Computing Science from Utrecht University, both cum laude, and
          completed honors programs alongside both degrees.
        </Paragraph>
        <Paragraph>
          Feel free to explore my <Link href="/projects">projects</Link> to see
          what I’ve been working on, or check out my{" "}
          <Link href="/resume.pdf" rel="noopener noreferrer" target="_blank">
            resume
          </Link>{" "}
          to learn more about my background and experience. Source code for this
          site is up on{" "}
          <Link external href="https://github.com/ThijnK/portfolio">
            GitHub
          </Link>
          .
        </Paragraph>
      </Section>
    </Article>
  );
}
