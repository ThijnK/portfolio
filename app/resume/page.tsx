import { Article, ButtonLink, Header } from "@/components/article";
import { LuDownload } from "react-icons/lu";

export default function Projects() {
  return (
    <Article>
      <Header>Resume</Header>

      <ButtonLink href="/resume/CV_Thijn.pdf" download>
        <LuDownload className="size-5 shrink-0" />
        Full Version (PDF)
      </ButtonLink>
    </Article>
  );
}
