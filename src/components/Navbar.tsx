import React from "react";

import {
  NavBrandArea,
  NavBrandLogo,
  Navigation,
  NavBrand,
  NavArea,
  NavItems,
  NavLink,
} from "./NavbarCommon";

type Props = {
  children: React.ReactNode;
};

const Navbar = (props: Props) => {
  
  return (
    <Navigation>
      <NavBrandArea href="/">
        <NavBrand>{props.children}</NavBrand>
      </NavBrandArea>
      <NavArea>
        <NavItems>
          <NavLink to="/m/logout">Logout</NavLink>
        </NavItems>
      </NavArea>
    </Navigation>
  );
}

export default Navbar;
