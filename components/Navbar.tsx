import React from 'react';
import styles from '../styles/component/Navbar.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.brandArea} href='/'>
        <h1 className={styles.navBrand}>{props.children}</h1>
      </a>
      <div className={styles.navArea}>
        <div className={styles.navItems}>
          <a className={styles.navLink} href='/'>Profile</a>
        </div>
        <div className={styles.navItems}>
          <a className={styles.navLink} href='/'>Works</a>
        </div>
        <div className={styles.navItems}>
          <a className={styles.navForienLink} href='https://github.com/shotastage'>Github</a>
        </div>
        <div className={styles.navItems}>
          <a className={styles.navForienLink} href=''>🌏 en</a>
        </div>
      </div>
    </nav>
  );
};
