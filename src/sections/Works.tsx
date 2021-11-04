import React from "react";
import { Grid, GridGlobal } from '../components/Grid';
import { Card, CardBody, CardHeading, CardDescription } from '../components/Cards';
import { Heading2 } from '../components/Typography';


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

const Work2GridLayoutGlobal: GridGlobal = {
  colStart: 2,
  colEnd: 3,
  rowStart: 7,
  rowEnd: 8,
}

const Work3GridLayoutGlobal: GridGlobal = {
  colStart: 3,
  colEnd: 4,
  rowStart: 7,
  rowEnd: 8,
}

export const Works = () => {
  return (
    <React.Fragment>
      <Grid className="WorkSectionTitle" global={WorkSectionTitleGridLayoutGlobal}>
        <Heading2>Works</Heading2>
      </Grid>
      <Grid className="Work1" global={Work1GridLayoutGlobal}>
        <Card>
          <CardBody>
            <CardHeading>GeoTube</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
      </Grid>
      <Grid className="Work2" global={Work2GridLayoutGlobal}>
        <Card>
          <CardBody>
            <CardHeading>Link Shortener</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
      </Grid>
      <Grid className="Work3" global={Work3GridLayoutGlobal}>
        <Card>
          <CardBody>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
