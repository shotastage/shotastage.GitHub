import styles from "./Footer.module.scss";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <nav className={styles.footerNav}>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
      <footer className={styles.footer}>
        Copyright © {currentYear} MagicApp & Shota Shimazu All Right Reserved.
      </footer>
    </>
  );
};

export default Footer;
