import React from 'react';
import {
  NavBrandArea,
  Navigation,
  NavBrand,
  NavArea,
  NavItems,
  NavLink,
  NavForienLink,
} from './NavbarCommon';

type Props = {
  children: React.ReactNode;
};

export const Navbar = (props: Props) => {
  return (
    <Navigation>
      <NavBrandArea href='/'>
        <NavBrand>{props.children}</NavBrand>
      </NavBrandArea>
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
    </Navigation>
  );
};
