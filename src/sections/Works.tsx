import React from "react";
import styled from "styled-components";
import { Grid, GridGlobal } from '../components/Grid';
import { Card, CardBody, CardHeading, CardDescription } from '../components/Cards';
import { Heading2 } from '../components/Typography';

const WorkCardsSection = styled(Grid)`
  display: flex;
  overflow-x: scroll;
  color: inherit;
`;

const WorkCard = styled(Card)`
  height: 400px;
  min-width: 300px;
  max-width: 350px;
  margin-right: 1rem;
  margin-left: 1rem;

  @media (max-width: 480px) {
    margin-right: 0.7rem;
    margin-left: 0.7rem;
  }
`;

const WarkCardTopMargin = styled.div`
  background: transparent;
  @media (max-width: 480px) {
    min-width: 1rem;
  }
`;

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
  return (
    <React.Fragment>
      <Grid className="WorkSectionTitle" global={WorkSectionTitleGridLayoutGlobal}>
        <Heading2>Works</Heading2>
      </Grid>
      <WorkCardsSection global={Work1GridLayoutGlobal}>
        <WarkCardTopMargin />
        <WorkCard>
          <CardBody>
            <CardHeading>GeoTube</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </WorkCard>
        <WorkCard>
          <CardBody>
            <CardHeading>Link Shortener</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </WorkCard>
        <WorkCard>
          <CardBody>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </WorkCard>
        <WorkCard>
          <CardBody>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </CardBody>
        </WorkCard>
        <WarkCardTopMargin />
      </WorkCardsSection>
    </React.Fragment>
  );
}
