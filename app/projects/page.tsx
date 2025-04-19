import Project from "@/app/projects/project";
import { Article, Header, Link, List, Paragraph } from "@/components/article";
import { FaBuffer, FaDiscord } from "react-icons/fa6";
import { PiPathBold } from "react-icons/pi";

export default function Projects() {
  return (
    <Article>
      <Header>Projects</Header>

      <div className="flex flex-col gap-y-12">
        <Project
          title="Alpha Warden"
          className="font-bold"
          logo={{ src: "/projects/alpha-warden.png" }}
          link="https://alphawarden.com"
        >
          <Paragraph>
            Alpha Warden is a Discord moderation present in 300+ servers to
            prevent bot attacks and manage access control with features like
            token-restricted roles and emoji verification. Its modern web
            dashboard makes configuration and control of the bot simple for
            server admins.
          </Paragraph>
          <Paragraph>
            This project has given me hands-on experience with a range of
            technologies and practices—working with SQL and NoSQL databases,
            building a full-stack app with TypeScript, discord.js, and Next.js,
            implementing user authentication, and managing deployment, hosting,
            and ongoing maintenance. It’s been a great exercise in building and
            operating a production-ready system.
          </Paragraph>
        </Project>

        <Project
          title="Discord Bot Template"
          logo={{ icon: FaDiscord }}
          link="https://github.com/ThijnK/discord-bot-template-ts"
        >
          <Paragraph>
            Having built my fair share of Discord bots, I developed a preferred
            project structure and several reusable utilities. I wanted to share
            this with the community, so I created a template that anyone can use
            to kickstart their own Discord bot project—complete with slash
            commands, event handling, pagination, and more, all written in
            TypeScript and now updated to run on Deno 2.
          </Paragraph>
        </Project>

        <Project
          title="MAZE"
          className="uppercase font-medium"
          logo={{ icon: PiPathBold }}
          link="https://github.com/ThijnK/maze"
        >
          <Paragraph>
            MAZE is a dynamic symbolic execution engine for automated Java test
            generation. It analyzes JVM bytecode, systematically explores
            program paths using a mix of symbolic and concrete execution, and
            generates targeted test cases to maximize coverage.
          </Paragraph>
          <Paragraph>
            I developed MAZE as part of my master’s thesis at Utrecht
            University. Written in Java, it supports various search strategies
            to explore program paths and can handle complex data structures. The
            thesis focuses on comparing the effectiveness of these strategies in
            achieving high code- and mutation coverage.
          </Paragraph>
        </Project>

        <Project
          title="SecureSECO DAO"
          className="font-medium"
          logo={{ src: "/projects/secureseco-dao.png" }}
          link="https://dao.secureseco.org"
        >
          <Paragraph>
            As part of my bachelor thesis, I worked in a team of eight to
            develop SecureSECO DAO—a decentralized autonomous organization for{" "}
            <Link href="https://secureseco.org" external>
              SecureSECO
            </Link>
            . My main focus was developing the web application and documentation
            site. Our work earned 2nd place in the DAO Global Hackathon 2023.
          </Paragraph>
        </Project>

        <Project title="Other Projects" logo={{ icon: FaBuffer }}>
          <List>
            <li>Numerous automations and web scraping tools</li>
            <li>
              <Link href="https://github.com/ThijnK/three-boids" external>
                Three.js Boids
              </Link>{" "}
              simulation in Next.js
            </li>
            <li>Email inbox aggregator service (IMAP-based)</li>
            <li>
              <Link
                href="https://github.com/ThijnK/discord-server-cleaner"
                external
              >
                Discord Server Cleaner
              </Link>{" "}
              bot
            </li>
            <li>
              University course projects:
              <List>
                <li>
                  Rust REST API and Python Kafka consumer (deployed to the cloud
                  with Kubernetes and monitored using Prometheus + Grafana)
                </li>
                <li>EV charging simulation in C#</li>
                <li>
                  Compiler and abstract machine for the TI-BASIC 83 language in
                  Haskell
                </li>
                <li>Bounded symbolic verification tool for GCL in Haskell</li>
                <li>
                  <Link href="https://github.com/ThijnK/Shoot-Em-Up" external>
                    Shoot-em-up
                  </Link>{" "}
                  game in Haskell
                </li>
                <li>Raytracer and rasterizer in C#</li>
              </List>
            </li>
          </List>
        </Project>
      </div>
    </Article>
  );
}
