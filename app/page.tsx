import { Article, Link, Paragraph, Section } from "@/components/article";

export default function Home() {
  return (
    <Article title="Thijn Kroon">
      <Section>
        <Paragraph>
          Hi, I’m Thijn—a Computer Science graduate from Utrecht University,
          with a broad interest in software development. I enjoy working across
          the stack, from frontend to backend, using a variety of programming
          languages and technologies. Outside of coding, I like to run, read,
          and occasionally lose track of time gaming.
        </Paragraph>
        <Paragraph>
          Alongside my studies, I’ve been working as a freelance developer for
          about four years, building everything from landing pages and
          dashboards to Discord bots and automation tools. I graduated magna cum
          laude from both my bachelor’s and master’s degrees, completing honors
          programs alongside each.
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
          . Layout inspired by{" "}
          <Link external href="https://shud.in/">
            shud.in
          </Link>
          .
        </Paragraph>
      </Section>
    </Article>
  );
}
