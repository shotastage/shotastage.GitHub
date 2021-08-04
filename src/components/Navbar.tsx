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

class Navbar extends React.Component {
  render() {
    return (
      <Navigation>
        <NavBrandArea href="/">
          <NavBrand>{this.props.children}</NavBrand>
        </NavBrandArea>
        <NavArea>
          <NavItems>
            <NavLink to="/m/logout">Logout</NavLink>
          </NavItems>
        </NavArea>
      </Navigation>
    );
  }
}

export default Navbar;
