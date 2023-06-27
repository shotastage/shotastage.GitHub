"use client";

import { useRouter, usePathname } from "next/navigation";
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
  PopupModal,
  Heading2,
  NModal,
} from "@/components";


import { getArticles, getArticleDetail } from "@/repository/article";
import { Article, ArticleContent } from "@/entities/article";

import Image from "next/image";



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
