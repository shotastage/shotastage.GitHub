import Image from "next/image";
import styles from "./page.module.scss";
import NavigationPill from "../views/NavigationPill";
import Footer from "@/views/Footer";

export default function Home() {
  return (
    <>
      <NavigationPill />
      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.jumbotron}>
            <span className={styles.boldTypo}>MagicApp is</span>
            <span className={styles.boldTypoBottom}>Researcher Farm</span>
            <span className={styles.sentence1}>that involves</span>
            <span className={styles.boldTypoBottom}>Rich Experiences</span>
          </div>
        </div>
        <div className={styles.row}></div>
      </main>

      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Products</h2>
          <p>Introducing our latest products:</p>
          <ul>
            <li>Web Site Creation & Renewal</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTypo}>Services</h2>
          <p>Our services include:</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
