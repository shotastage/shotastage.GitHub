"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

import React, { useState } from "react";
import Modal from "react-modal";

import layout from "@/components/Layout.module.scss";
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

import { Avator, Name, UserName } from "@/components/AppComponent";
import { TopBanner } from "@/components/TopPopup";

// Page Sections

import { ProfileCard, WorkCardsContainer } from "@/sections";
import { WorkCard } from "@/sections";

import { getArticles } from "@/repository/article";
import { Article, ArticleContent } from "@/entities/article";

export default async function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const articlesData = await getArticles();
  const articles: [Article] = await Promise.all([articlesData]);

  return (
    <div>
      <Head>
        <title>Shota Portfolio</title>
        <meta name="description" content="SHOTA's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layout.container}>
        <Navbar>Shota's Portfolio</Navbar>
        <div className="grid grid-cols-2 gap-4 grid-flow-row auto-rows-max md:auto-rows-min">
          <ProfileCard className="w-16 md:w-32 "></ProfileCard>
          <div className="md:max-lg:flex">
            <h1>SSSSSS</h1>
          </div>
          <ProfileCard className="w-16 md:w-32 ">
            <h1>Shota Shimazu</h1>
          </ProfileCard>{" "}
        </div>
        <Heading2>Works</Heading2>
      </div>
      <WorkCardsContainer>
        {articles[0]?.contents?.map((article: ArticleContent) => {
          return (
            <WorkCard
              cardTitle={article.title}
              moreEvent={() => setIsOpen(true)}
              href={article?.id}
            ></WorkCard>
          );
        })}
        <button>Show more</button>
      </WorkCardsContainer>
      <div className={layout.container}>
        <Heading2>Writings</Heading2>
        <Heading2>Skills & Experiences</Heading2>
        <Heading2>Social</Heading2>
      </div>
      {/* <StorySection stories={stories}/> */}

      {/*
      <Works />
      <Writings />
      <SkillsSection />
      <SocialSection />
        */}
      <Footer>
        <FooterCopyright />
      </Footer>
    </div>
  );
}
