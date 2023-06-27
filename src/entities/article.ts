export type Article = {
  contents: [ArticleContent];
};

export type ArticleContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string;
  slug: string;
};
