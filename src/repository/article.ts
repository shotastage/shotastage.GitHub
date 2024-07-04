import { Article, ArticleContent } from "@/entities/article";

export async function getArticles(): Promise<Article> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not set");
  }

  try {
    const res = await fetch("https://shota-folio.microcms.io/api/v1/blogs", {
      method: "GET",
      headers: {
        "X-MICROCMS-API-KEY": `${process.env.API_KEY}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.log(`Failed to fetch data: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    // 型チェック（例）
    if (!('contents' in data)) {
      throw new Error("Received data does not match the expected type");
    }

    return data as Article;
  } catch (error) {
    console.log(`An error occurred: ${error}`);
    throw error;
  }
}

export async function getArticleDetail(id: string): Promise<ArticleContent> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not set");
  }

  try {
    const timestamp = Date.now();
    const res = await fetch(
      `https://shota-folio.microcms.io/api/v1/blogs/${id}?timestamp=${timestamp}`,
      {
        method: "GET",
        headers: {
          "X-MICROCMS-API-KEY": `${process.env.API_KEY}`,
        },
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch data");
    }

    const data: ArticleContent = await res.json();
    return data;
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    throw error;
  }
}
