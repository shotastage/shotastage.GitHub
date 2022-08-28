import React from 'react';
import {
  NavLink,
  NavForienLink,
} from './NavbarCommon';
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
          <NavLink href='/'>Profile</NavLink>
        </div>
        <div className={styles.navItems}>
          <NavLink href='/'>Works</NavLink>
        </div>
        <div className={styles.navItems}>
          <NavForienLink href='https://github.com/shotastage'>Github</NavForienLink>
        </div>
        <div className={styles.navItems}>
          <NavForienLink href=''>🌏 en</NavForienLink>
          </div>
      </div>
    </nav>
  );
};
