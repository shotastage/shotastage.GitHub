import React from "react";

import {
  NavBrandArea,
  Navigation,
  NavBrand,
  NavArea,
  NavItems,
  NavLink,
} from "./NavbarCommon";

type Props = {
  children: React.ReactNode;
};

export const Navbar = (props: Props) => {

  return (
    <Navigation>
      <NavBrandArea href="/">
        <NavBrand>{props.children}</NavBrand>
      </NavBrandArea>
      <NavArea>
        <NavItems>
          <NavLink to="/">🥺</NavLink>
        </NavItems>
      </NavArea>
    </Navigation>
  );
}
