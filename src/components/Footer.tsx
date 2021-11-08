import React from 'react';
import {createUseStyles} from 'react-jss';
import styled from 'styled-components';


const useStyles = createUseStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:visited': {
      color: 'inherit',
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export const Footer = (props: Props) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
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
    font-size: 0.6rem;
  }
`;

export const FooterCopyright = () => {
  const classes = useStyles()
  const currentDate = new Date().getFullYear();

  return (
    <CopyrightText>
      Copyright © {currentDate} <a className={classes.link} href="https://twitter.com/shotastage" target="_blank" rel="noopener noreferrer">Shota Shimazu</a>, All rights reserved.
    </CopyrightText>
  );
}
