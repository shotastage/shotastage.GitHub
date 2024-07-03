import Image from "next/image";
import styles from "./page.module.scss";
import NavigationPill from "../views/NavigationPill";

export default function Home() {
  return (
    <>
      <NavigationPill />
      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.headCard}>
            <h1>App Experience</h1>
          </div>
          <div className={styles.headCard}>
            <h1>Web Design</h1>
          </div>
          <div className={styles.headCard}>
            <h1>Cloud System Design</h1>
          </div>
          <div className={styles.headCard}>
            <h1>AI Experience</h1>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.headCard}>
            <h1>People Management</h1>
          </div>
          <div className={styles.headCard}>
            <h1>Entrepreneurship</h1>
          </div>
          <div className={styles.headCard}>
            <h1>Global Biz</h1>
          </div>
          <div className={styles.headCard}>
            <h1>Arts in Engineering</h1>
          </div>
        </div>
      </main>

      <main className={styles.container}>
        <section className={styles.section}>
          <h2>Products</h2>
          <p>Introducing our latest products:</p>
          <ul>
            <li>Web Site Creation & Renewal</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Services</h2>
          <p>Our services include:</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
    </>
  );
}
