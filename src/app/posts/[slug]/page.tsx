import NavigationPill from "@/views/NavigationPill";
import styles from "./page.module.scss";

import { getArticles, getArticleDetail } from "@/repository/article";
import { Article, ArticleContent } from "@/entities/article";

export async function generateStaticParams() {
  const articlesData = await getArticles();

  console.log(JSON.stringify(articlesData));

  return articlesData.contents.map((article) => ({
    slug: article.id,
  }));
}

function formatTimestamp(timestamp: string): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

function capitalizeFirstLetter(str: string): string {
  if (!str || str.length === 0) return str;

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const articlesData = await getArticleDetail(params.slug);
  const content: Array<ArticleContent> = await Promise.all([articlesData]);

  return (
    <>
      <main className={styles.main}>
        <NavigationPill addBackButton={true} />
        <h1 className={styles.heading}>{content[0]?.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${content[0]?.content}`,
          }}
          className={styles.detail}
        />

      </main>
    </>
  );
}
