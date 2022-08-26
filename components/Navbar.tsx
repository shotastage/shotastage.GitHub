import React from 'react';
import {
  NavBrand,
  NavArea,
  NavItems,
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
      <NavArea>
        <NavItems>
          <NavLink href='/'>Profile</NavLink>
        </NavItems>
        <NavItems>
          <NavLink href='/'>Works</NavLink>
        </NavItems>
        <NavItems>
          <NavForienLink href='https://github.com/shotastage'>Github</NavForienLink>
        </NavItems>
        <NavItems>
          <NavForienLink href=''>🌏 en</NavForienLink>
        </NavItems>
      </NavArea>
    </nav>
  );
};
