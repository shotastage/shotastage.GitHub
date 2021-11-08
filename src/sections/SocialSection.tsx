import React from 'react';
import styled from 'styled-components';
import {createUseStyles} from 'react-jss';
import { Grid, GridGlobal } from '../components/Grid';
import { CardIcon } from '../components/Cards';
import { Heading2 } from '../components/Typography';

const SocialButtonBase = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
`;

const Twitter = styled(SocialButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  background-clip: border-box;
  background: #00ACEE;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
  height: 200px;
  width: 350px;
`;

const Instagram = styled(SocialButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
  height: 200px;
  width: 350px;
  background: #f09433;
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
`;

const Github = styled(SocialButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  background-clip: border-box;
  background: #1d1d1d;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
  height: 200px;
  width: 350px;
`;

const useStyles = createUseStyles({
  gridStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  skillsBlock: {
    display: 'flex',
    overflow: 'hidden',
    overflowX: 'scroll',
  },
});

// MARK: Skills grid layout

const SocialGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 17,
  rowEnd: 18,
}

const FooterGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 19,
  rowEnd: 20,
}

export const SocialSection = (): JSX.Element => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid global={SocialGridLayoutGlobal}>
        <Heading2>Social</Heading2>
      </Grid>
      <Grid global={FooterGridLayoutGlobal} className={classes.gridStyle}>
        <Twitter onClick={() => window.open('https://twitter.com/shotastage', '_blank')}>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/twitter.svg`} />
        </Twitter>
        <Instagram onClick={() => window.open('https://instagram.com/shotastage', '_blank')}>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/instagram.svg`} />
        </Instagram>
        <Github onClick={() => window.open('https://github.com/shotastage', '_blank')}>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/github.svg`} />
        </Github>
      </Grid>
    </React.Fragment>
  );
}
