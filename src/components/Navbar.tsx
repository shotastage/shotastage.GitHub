import React from "react";
import styled from "styled-components";
import {
  NavBrandArea,
  Navigation,
  NavBrand,
  NavArea,
  NavItems,
  NavLink,
  NavForienLink,
} from "./NavbarCommon";

const NavPullDown = styled.div`
position: absolute;
background: red;
height: 100px;
width: 200px;
`;

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
          <NavLink to="/">Profile</NavLink>
        </NavItems>
        <NavItems>
          <NavLink to="/">Works</NavLink>
        </NavItems>
        <NavItems>
          <NavForienLink href="https://github.com/shotastage">Github</NavForienLink>
        </NavItems>
        <NavItems>
          <NavForienLink href="">🌏 en</NavForienLink>
        </NavItems>
      </NavArea>
    </Navigation>
  );
}
