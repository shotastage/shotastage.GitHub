import Link from "next/link";
import Head from "next/head";

import React from "react";

import layout from "@/components/Layout.module.scss";

import styles from "./Article.module.scss";
//import Image from 'next/image'

import {
  Flex,
  Navbar,
  Heading,
  Footer,
  FooterCopyright,
  SFImage,
  Heading2,
} from "@/components";

// Page Sections

import { getArticles, getArticleDetail } from "@/repository/article";
import { Article, ArticleContent } from "@/entities/article";

import Image from "next/image";

export async function generateStaticParams() {
  const articlesData = await getArticles();

  return articlesData.contents?.map((article: ArticleContent) => ({
    slug: article.id,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const articlesData = await getArticleDetail(params.slug);
  const content: Array<ArticleContent> = await Promise.all([articlesData]);

  return (
    <div>
      <Head>
        <title>Shota Portfolio</title>
        <meta name="description" content="SHOTA's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layout.container}>
        <Link href={`/`}>
          <button className={styles.backButton}>←</button>
        </Link>

        <h1 className={styles.heading}>{content[0]?.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${content[0]?.content}`,
          }}
          className={styles.detail}
        />
      </div>
      <Footer>
        <FooterCopyright />
      </Footer>
    </div>
  );
}
