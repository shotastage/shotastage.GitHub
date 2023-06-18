import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

import { client } from "@/libs/cms-client";
import { Article } from "@/entities/article";

export const getArticles = async () => {
  const listData = await client.getList<Article>({
    endpoint: "blogs",
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};
