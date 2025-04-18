import Project from "@/app/projects/project";
import { Article, Header, Paragraph } from "@/components/article";
import { FaDiscord } from "react-icons/fa6";

export default function Projects() {
  return (
    <Article>
      <Header>Projects</Header>

      <div className="flex flex-col gap-y-10">
        <Project
          title="Alpha Warden"
          className="font-roboto font-bold"
          logo={{ src: "/projects/alpha-warden.png" }}
          link="https://alphawarden.com"
        >
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            blanditiis asperiores, ex cupiditate ipsa, cumque perspiciatis vel
            magni doloremque quam eveniet voluptatem ullam accusantium, corrupti
            non tempora commodi nisi corporis.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            blanditiis asperiores, ex cupiditate ipsa, cumque perspiciatis vel
            magni doloremque quam eveniet voluptatem ullam accusantium, corrupti
            non tempora commodi nisi corporis.
          </Paragraph>
        </Project>

        <Project
          title="Discord Bot Template"
          logo={{ icon: FaDiscord }}
          link="https://github.com/ThijnK/discord-bot-template-ts"
        >
          <Paragraph>
            Having built my fair share of Discord bots, I developed a preferred
            way of structuring the code and found myself reusing a set of
            utilities for each new bot. I wanted to share this with the
            community, so I created a template that anyone can use to kickstart
            their own Discord bot project—complete with slash commands, event
            handling, pagination, and more, all written in TypeScript.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            enim sapiente? Voluptatum tenetur, laboriosam facilis optio nam nemo
            consectetur ullam adipisci blanditiis veniam velit consequatur
            repudiandae voluptate commodi minus itaque?
          </Paragraph>
        </Project>
      </div>
    </Article>
  );
}
