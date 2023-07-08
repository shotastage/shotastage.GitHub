import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.brandArea} href="/">
        <h1 className={styles.navBrand}>{props.children}</h1>
      </a>
      <div className={styles.navArea}>
        <div className={styles.navItems}>
          <Link className={styles.navLink} href="#portfolio">
            Profile
          </Link>
        </div>
        <div className={styles.navItems}>
          <Link className={styles.navLink} href="#works">
            Works
          </Link>
        </div>
        <div className={styles.navItems}>
          <a
            className={styles.navForienLink}
            href="https://github.com/shotastage"
          >
            Github
          </a>
        </div>

        <object
          className={styles.navToggle}
          type="image/svg+xml"
          data="/icons/Pop-Toggle.svg"
        >
          Button Icon can not be displayed on your browser.
        </object>
      </div>
    </nav>
  );
};
