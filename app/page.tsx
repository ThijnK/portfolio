import { Article, Link, Paragraph, Section } from "@/components/article";

export default function Home() {
  return (
    <Article title="Thijn Kroon">
      <Section>
        <Paragraph>
          Hi, I’m Thijn—a software developer who enjoys working across the
          stack. I take pride in writing code that’s not just functional, but
          clean, organized, and well-structured. Outside of coding, I like to
          run, read, and occasionally lose track of time gaming.
        </Paragraph>
        <Paragraph>
          I graduated from Utrecht University with both a bachelor’s and
          master’s in Computer Science, magna cum laude, and took part in honors
          programs for each. During my studies, I co-founded{" "}
          <Link external href="https://quickcode.agency">
            QuickCode
          </Link>
          , a small developer agency, where I’ve spent the past few years
          working with clients on projects ranging from web apps and dashboards
          to automation tools, web scrapers, and Discord bots.
        </Paragraph>
        <Paragraph>
          Feel free to explore my <Link href="/projects">projects</Link> to see
          what I’ve been working on, or check out my{" "}
          <Link href="/resume.pdf" rel="noopener noreferrer" target="_blank">
            resume
          </Link>{" "}
          to learn more about my background and experience. Curious how this
          site was built? The source code’s up on{" "}
          <Link external href="https://github.com/ThijnK/portfolio">
            GitHub
          </Link>
          .
        </Paragraph>
      </Section>
    </Article>
  );
}
