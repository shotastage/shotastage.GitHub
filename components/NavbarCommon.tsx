import styled from 'styled-components';

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
