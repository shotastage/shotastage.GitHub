import Image from "next/image";
import styles from "./page.module.scss";
import NavigationPill from "../views/ NavigationPill";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <NavigationPill />
        <h1>Hello, world</h1>
      </main>

      <main className={styles.main}>
        <h2>Columns</h2>
        <h2>Services</h2>
      </main>

    </>
  );
}
