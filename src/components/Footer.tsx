import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};
  
export const Footer = (props: Props) => {
  return (
    <>
      {props.children}
    </>
  );
}

const CopyrightText = styled.p`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 1em;
  margin-bottom: 1em;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const FooterCopyright = () => {
  const currentDate = new Date().getFullYear();      

  return (
    <CopyrightText>
      Copyright © {currentDate} Shota Shimazu, All rights reserved.
    </CopyrightText>
  );
}
