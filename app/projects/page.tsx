import {
  Article,
  Link,
  List,
  ListItem,
  Paragraph,
  Section,
} from "@/components/article";

export default function Projects() {
  return (
    <Article title="Projects">
      <Section
        title="Alpha Warden"
        badge={{
          src: "/projects/alpha-warden.png",
          label: "Alpha Warden Logo",
        }}
        href="https://alphawarden.com"
      >
        <Paragraph>
          Alpha Warden is a Discord moderation bot trusted by 300+ servers to
          prevent bot attacks and manage access control with features like
          token-restricted roles and emoji verification. Its modern web
          dashboard makes it easy for server admins to configure and control the
          bot.
        </Paragraph>
        <Paragraph>
          As the sole developer, this project has given me hands-on experience
          with a range of technologies and practices—building a full-stack app
          with TypeScript, discord.js, and Next.js, working with SQL and NoSQL
          databases, implementing user authentication, and managing deployment,
          hosting, and ongoing maintenance. It’s been a great exercise in
          building and operating a production-ready system.
        </Paragraph>
      </Section>

      <Section
        title="MAZE"
        badge={{ icon: "maze" }}
        href="https://github.com/ThijnK/maze"
      >
        <Paragraph>
          MAZE is a dynamic symbolic execution engine for automated Java test
          generation. It analyzes JVM bytecode, systematically explores program
          paths using a mix of symbolic and concrete execution, and generates
          targeted unit tests to maximize code coverage.
        </Paragraph>
        <Paragraph>
          I developed MAZE as part of my master’s thesis at Utrecht University.
          Written in Java, it supports various search strategies to explore
          program paths and can handle complex data structures. The thesis
          focuses on comparing the effectiveness of these strategies in
          achieving high code- and mutation coverage.
        </Paragraph>
      </Section>

      <Section
        title="SecureSECO DAO"
        badge={{
          src: "/projects/secureseco-dao.png",
          label: "SecureSECO DAO Logo",
        }}
        href="https://dao.secureseco.org"
      >
        <Paragraph>
          As part of my bachelor thesis, I worked in a team of eight to develop
          SecureSECO DAO—a decentralized autonomous organization for{" "}
          <Link href="https://secureseco.org" external>
            SecureSECO
          </Link>
          . My main focus was developing the web application and documentation
          site. Our work earned 2nd place in the DAO Global Hackathon 2023.
        </Paragraph>
      </Section>

      <Section
        title="Discord Bot Template"
        badge={{ icon: "discord" }}
        href="https://github.com/ThijnK/discord-bot-template-ts"
      >
        <Paragraph>
          Having built my fair share of Discord bots, I developed a preferred
          project structure and several reusable utilities. I wanted to share
          this with the community, so I created a template that anyone can use
          to kickstart their own Discord bot project—complete with slash
          commands, event handling, pagination, and more, all written in
          TypeScript and now updated to run on Deno 2.
        </Paragraph>
      </Section>

      <Section title="Other Projects" badge={{ icon: "projects" }}>
        <List>
          <ListItem>Numerous automations and web scraping tools</ListItem>
          <ListItem>
            <Link href="https://github.com/ThijnK/three-boids" external>
              Three.js Boids
            </Link>{" "}
            simulation in Next.js
          </ListItem>
          <ListItem>Email inbox aggregator service (IMAP-based)</ListItem>
          <ListItem>
            <Link
              href="https://github.com/ThijnK/discord-server-cleaner"
              external
            >
              Discord Server Cleaner
            </Link>{" "}
            bot
          </ListItem>
          <ListItem variants={undefined}>
            University course projects:
            <List>
              <ListItem>
                Rust REST API and Python Kafka consumer (deployed to the cloud
                with Kubernetes and monitored using Prometheus + Grafana)
              </ListItem>
              <ListItem>EV charging simulation in C#</ListItem>
              <ListItem>
                Compiler and abstract machine for TI-BASIC 83 in Haskell
              </ListItem>
              <ListItem>
                Bounded symbolic verification tool for GCL in Haskell
              </ListItem>
              <ListItem>
                <Link href="https://github.com/ThijnK/Shoot-Em-Up" external>
                  Shoot-em-up
                </Link>{" "}
                game in Haskell
              </ListItem>
              <ListItem>Raytracer and rasterizer in C#</ListItem>
            </List>
          </ListItem>
        </List>
      </Section>
    </Article>
  );
}
