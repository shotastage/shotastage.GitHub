import styled from 'styled-components';

export const NavBrandArea = styled.a`

`;

export const NavBrandLogo = styled.object`
  width: 40px;
  height: 40px;
  margin: 7px;
  margin-left: 20px;
  margin-right: 0;
  transition: transform 0.8s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const Navigation = styled.nav`

`;

export const NavBrand = styled.h1`

`;

export const NavArea = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavItems = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0.5em;
  border-radius: 0.3em;
  &:hover {
    background: #000;
    color: #fff;
  }
  @media screen and (max-width: 480px) {
    padding: 0.5em;
    border-radius: 0.3em;
  }
`;

export const NavForienLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0.5em;
  border-radius: 0.3em;
  &:hover {
    background: #000;
    color: #fff;
  }
  @media screen and (max-width: 480px) {
    padding: 0.5em;
    border-radius: 0.3em;
  }
`;
