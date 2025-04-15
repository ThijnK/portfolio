import { Article, Header, Paragraph } from "@/components/article";

export default function Home() {
  return (
    <Article>
      <Header className="mb-1">Thijn Kroon</Header>
      <Paragraph>
        Hi, I&apos;m a software engineer based in the Netherlands. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Minima saepe, distinctio
        quis, praesentium fugit, ut dolor reiciendis inventore obcaecati quasi
        consectetur cum repellendus porro molestias incidunt id debitis. Cum,
        vero.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        nobis perferendis ad suscipit maiores, molestiae omnis ipsa nisi, fuga
        dicta voluptatum porro vero voluptatibus quos sit, fugiat aspernatur?
        Reiciendis, accusamus!
      </Paragraph>
    </Article>
  );
}
