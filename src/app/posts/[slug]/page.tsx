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

  console.log(JSON.stringify(articlesData));

  return articlesData.contents.map((article) => ({
    slug: article.id,
  }));
}

function ArticleNav() {
  return (
    <nav className={styles.articleNav}>
      <div className={styles.articleNavInfoArea}>
        <object
          className={styles.articleNavIcon}
          type="image/svg+xml"
          data="/icons/Calendar-Icon.svg"
        >
          This image cannot be displayed due to technical problem causing on
          this browser.
        </object>

        <span>2023 Jul 7</span>
      </div>

      <span>Home</span>
      <span>Articles</span>
      <span>News</span>

      <object
        className={styles.articleNavToggle}
        type="image/svg+xml"
        data="/icons/Pop-Toggle.svg"
      >
        This image cannot be displayed due to technical problem causing on this
        browser.
      </object>
    </nav>
  );
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
      <Link href={`/`}>
        <button className={styles.backButton}>
          <object
            className={styles.backButtonIcon}
            type="image/svg+xml"
            data="/icons/arrow-left.svg"
          >
            This image cannot be displayed due to technical problem causing on
            this browser.
          </object>
        </button>
      </Link>
      <div className={layout.articleContainer}>
        <ArticleNav />
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
