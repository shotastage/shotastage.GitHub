import { Article, ArticleContent } from "@/entities/article";
import { logger } from "@/libs/logger";

export async function getArticles(): Promise<Article> {
  const res = await fetch("https://shota-folio.microcms.io/api/v1/blogs", {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": `${process.env.API_KEY}`,
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export async function getArticleDetail(id: string): Promise<ArticleContent> {
  const res = await fetch(
    `https://shota-folio.microcms.io/api/v1/blogs/${id}`,
    {
      method: "GET",
      headers: {
        "X-MICROCMS-API-KEY": `${process.env.API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
