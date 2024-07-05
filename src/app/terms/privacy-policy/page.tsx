import NavigationPill from "@/views/NavigationPill";
import styles from "./page.module.scss";
import { getArticleDetail } from "@/repository/article";
import { JSDOM } from "jsdom";

interface ArticleContent {
  title: string;
  content: string;
}

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
  parentId: string | null;
}

function extractTableOfContents(htmlContent: string): TableOfContentsItem[] {
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;
  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

  const items: TableOfContentsItem[] = [];
  const stack: TableOfContentsItem[] = [];

  Array.from(headings).forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    const item: TableOfContentsItem = {
      id: `heading-${index}`,
      text: heading.textContent || "",
      level,
      parentId: null,
    };

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length > 0 && level > 2) {
      item.parentId = stack[stack.length - 1].id;
    }

    items.push(item);
    stack.push(item);
  });

  return items;
}




export default async function Page({ params }: { params: { slug: string } }) {
  const articlesData = await getArticleDetail(params.slug);
  const content: ArticleContent = articlesData;
  const tableOfContents = extractTableOfContents(content.content);


  return (
    <>
      <NavigationPill />
      <main className={styles.main}>
        <h1 className={styles.heading}>{content.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: contentWithIds,
          }}
          className={styles.detail}
        />
      </main>
    </>
  );
}
