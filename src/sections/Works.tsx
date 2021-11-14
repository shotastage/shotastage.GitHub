import React from "react";
import {createUseStyles} from 'react-jss';
import { Grid, GridGlobal } from '../components/Grid';
import { Card, CardBody, CardHeading, CardDescription } from '../components/Cards';
import { Heading2 } from '../components/Typography';

const useStyles = createUseStyles({
  workCardSection: {
    display: 'flex',
    overflowX: 'scroll',
    color: 'inherit',
  },
  workCard: {
    height: '400px',
    minWidth: '300px',
    maxWidth: '350px',
    marginRight: '1rem',
    marginLeft: '1rem',
  },
  workCardTopMargin: {
    background: 'transparent',
  },
  '@media (max-width: 480px)': {
    workCard: {
      marginRight: '0.7rem',
      marginLeft: '0.7rem',
    },
    workCardTopMargin: {
      minWidth: '1rem',
    },
  },
});

const WorkSectionTitleGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 5,
  rowEnd: 6,
}

const Work1GridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 2,
  rowStart: 7,
  rowEnd: 8,
}

export const Works = () => {

  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid className="WorkSectionTitle" global={WorkSectionTitleGridLayoutGlobal}>
        <Heading2>Works</Heading2>
      </Grid>
      <Grid className={classes.workCardSection} global={Work1GridLayoutGlobal}>
        <div className={classes.workCardTopMargin} />
        <Card className={classes.workCard}>
          <CardBody>
            <CardHeading>GeoTube</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
        <Card className={classes.workCard}>
          <CardBody>
            <CardHeading>Link Shortener</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
        <Card className={classes.workCard}>
          <CardBody>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
        <Card className={classes.workCard}>
          <CardBody>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
        <div className={classes.workCardTopMargin} />
      </Grid>
    </React.Fragment>
  );
}
