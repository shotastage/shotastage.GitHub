import NavigationPill from "@/views/NavigationPill";
import styles from "./page.module.scss";
import { getArticleDetail } from "@/repository/article";
import { JSDOM } from "jsdom";

export default async function Page({ params }: { params: { slug: string } }) {
  const articlesData = await getArticleDetail(params.slug);


  return (
    <>
      <NavigationPill />
      <main className={styles.main}>
        <p>Privacy policy page is now under construction.</p>
      </main>
    </>
  );
}
