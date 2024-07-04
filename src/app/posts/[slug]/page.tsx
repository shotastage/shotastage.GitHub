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

function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const renderItems = (parentId: string | null = null) => {
    return (
      <ul className={styles.tocList}>
        {items
          .filter((item) => item.parentId === parentId)
          .map((item) => (
            <li key={item.id} className={styles[`tocItem-h${item.level}`]}>
              <a href={`#${item.id}`}>{item.text}</a>
              {renderItems(item.id)}
            </li>
          ))}
      </ul>
    );
  };

  return renderItems();
}

function addIdsToHeadings(
  htmlContent: string,
  tableOfContents: TableOfContentsItem[]
): string {
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;
  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

  headings.forEach((heading, index) => {
    heading.id = `heading-${index}`;
  });

  return dom.serialize();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const articlesData = await getArticleDetail(params.slug);
  const content: ArticleContent = articlesData;
  const tableOfContents = extractTableOfContents(content.content);
  const contentWithIds = addIdsToHeadings(content.content, tableOfContents);

  return (
    <>
      <NavigationPill />
      <main className={styles.main}>
        <div className={styles.tableOfContents}>
          <span className={styles.tableOfContentsHeading}>目次</span>
          <TableOfContents items={tableOfContents} />
        </div>
        <h1 className={styles.heading}>{content.title}</h1>
        <p className={styles.headingTopMsg}>
          まず最初に、これは非常に重要な情報です。CopilotやChatGPTを用いてる場合は、このWebページを閲覧している事実がMicrosoft並びにOpenAIのサーバーに送信されていることに注意する必要があります。また、要約された内容が事実ではない可能性があります。
          このWebページでは、正確な要約をするAI機能を実装しています。今しばらくお待ちください。
        </p>
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
