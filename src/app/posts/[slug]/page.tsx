import NavigationPill from "@/views/NavigationPill";
import styles from "./page.module.scss";

export default function Posts() {
    return (
      <>
        <main className={styles.main}>
          <NavigationPill />
          <div className={styles.row}>
            <div className={styles.headCard}>
              <h1>Hello, Experience!</h1>
            </div>
            <div className={styles.headCard}>
              <h1>Hello, Experience!</h1>
            </div>
            <div className={styles.headCard}>
              <h1>Hello, Experience!</h1>
            </div>
            <div className={styles.headCard}>
              <h1>Hello, Experience!</h1>
            </div>
          </div>
        </main>

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
      </>
    );
  }
