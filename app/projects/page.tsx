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
        badge={{
          icon: "aw",
          label: "Alpha Warden Logo",
          className: "size-8",
        }}
        href="https://alphawarden.com"
        title="Alpha Warden"
      >
        <Paragraph>
          I built and maintain Alpha Warden, a Discord moderation platform used
          by 300+ servers. It helps communities prevent bot attacks and manage
          access through token-restricted roles and verification challenges,
          with a web dashboard for configuration and moderation.
        </Paragraph>
        <Paragraph>
          I developed the bot and dashboard independently using TypeScript,
          discord.js, and Next.js. I also handle the databases, authentication,
          deployment, and ongoing operation of the service.
        </Paragraph>
      </Section>

      <Section
        badge={{ icon: "maze" }}
        href="https://github.com/ThijnK/maze"
        title="MAZE"
      >
        <Paragraph>
          MAZE is a dynamic symbolic execution engine I designed and built for
          automated Java test generation. It analyzes JVM bytecode and combines
          symbolic and concrete execution to explore program paths and generate
          test inputs.
        </Paragraph>
        <Paragraph>
          I developed it for my{" "}
          <Link
            external
            href="https://studenttheses.uu.nl/items/3b006e4a-5874-45b5-84a4-41aa495aba8c"
          >
            master’s thesis
          </Link>{" "}
          at Utrecht University. Its modular architecture lets different search
          strategies be configured and combined. I formally defined its
          execution semantics and evaluated the strategies on a custom benchmark
          suite, studying how the choice of strategy affects the tests it
          generates.
        </Paragraph>
      </Section>

      <Section
        badge={{
          src: "/projects/secureseco-dao.png",
          label: "SecureSECO DAO Logo",
        }}
        href="https://dao.secureseco.org"
        title="SecureSECO DAO"
      >
        <Paragraph>
          I co-developed a decentralized autonomous organization for{" "}
          <Link external href="https://secureseco.org">
            SecureSECO
          </Link>{" "}
          in a team of eight during my bachelor’s software project. My focus was
          the web application and documentation. I also coauthored a{" "}
          <Link external href="https://doi.org/10.3389/fbloc.2024.1481914">
            peer-reviewed paper
          </Link>{" "}
          on community-governed smart-contract upgrades, using SecureSECO DAO as
          the case study.
        </Paragraph>
        <Paragraph>
          The DAO web app template I co-developed with QuickCode for this
          project was one of two winners in Aragon’s{" "}
          <Link
            external
            href="https://blog.aragon.org/dao-global-hackathon-bounty-winners/"
          >
            Best Quickstart dApp
          </Link>{" "}
          category at the 2023 DAO Global Hackathon.
        </Paragraph>
      </Section>

      <Section badge={{ icon: "projects" }} title="Other experiments">
        <List>
          <ListItem>TI-BASIC 83 parser and interpreter in Haskell</ListItem>
          <ListItem>Bounded symbolic verifier for GCL in Haskell</ListItem>
          <ListItem>Raytracer and rasterizer in C#</ListItem>
          <ListItem>
            <Link external href="https://github.com/ThijnK/three-boids">
              Boids flocking simulation
            </Link>{" "}
            with Three.js and Next.js
          </ListItem>
        </List>
      </Section>
    </Article>
  );
}
