import React from "react";
import { Grid } from '../components/Grid';
import { Card, CardBody, CardHeading, CardDescription } from '../components/Cards';
import { Heading2 } from '../components/Typography';

export const Works = () => {
  return (
    <React.Fragment>
      <Grid className="WorkSectionTitle" colStart={1} colEnd={4} rowStart={5} rowEnd={6}>
        <Heading2>Works</Heading2>
      </Grid>
      <Grid className="Work1" colStart={1} colEnd={2} rowStart={7} rowEnd={8}>
        <Card>
          <CardBody>
            <CardHeading>GeoTube</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
      </Grid>
      <Grid className="Work2" colStart={2} colEnd={3} rowStart={7} rowEnd={8}>
        <Card>
          <CardBody>
            <CardHeading>Link Shortener</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </Card>
      </Grid>
      <Grid className="Work3" colStart={3} colEnd={4} rowStart={7} rowEnd={8}>
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
