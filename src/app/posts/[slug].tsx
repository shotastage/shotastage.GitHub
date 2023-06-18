import React from "react";
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  content: any;
};

export const ArticleDetail: NextPage<Props> = ({ content }: Props) => {
  return (
    <div>
      <div></div>
    </div>
  );
};
