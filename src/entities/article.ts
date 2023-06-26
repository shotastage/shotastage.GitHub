export type Article = {
  contents: [ArticleContent];
};

export type ArticleContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  body: string;
  slug: string;
};
