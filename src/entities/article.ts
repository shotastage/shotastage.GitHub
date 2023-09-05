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
  eyecatch?: ArticleEyecatch;
  category?: ArticleCategory;
  slug?: string;
};

export type ArticleEyecatch = {
  url: string;
  height: number;
  width: number;
};

export type ArticleCategory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};
