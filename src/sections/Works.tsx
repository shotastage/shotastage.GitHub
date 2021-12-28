import React from "react";
import styled from "styled-components";
import { RoundButton } from "../components/Button";
import {
  Grid,
  GridGlobal,
  Container,
  FullContainer,
  Box,
  ContainerMargin,
  Image,
  Card,
  CardBody,
  CardHeading,
  CardDescription,
  Heading2
} from '../components';
import HorizontalNoscroll from '../styles/NoneScrollBar';

const WorkCardsSection = styled(Grid)`
  width: 100vw;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  color: inherit;
  ${HorizontalNoscroll}
`;

const WorkCard = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  max-height: 400px;
  min-width: 300px;
  max-width: 350px;
  margin-right: 1rem;
  margin-left: 1rem;

  @media (max-width: 480px) {
    margin-right: 0.7rem;
    margin-left: 0.7rem;
  }
`;

const BhaaCard = styled(WorkCard)`
  background: #fc1547;

  * {
    color: #fff;
  }
`;

const WarkCardTopMargin = styled.div`
  background: transparent;
  @media (max-width: 480px) {
    min-width: 1rem;
  }
`;

const Work1GridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 2,
  rowStart: 7,
  rowEnd: 8,
}

const TileImage = styled.img`
  max-width: 150px;
  object-fit: cover;
  margin-left: calc((100% - 150px) / 2);
`;

const CardButton = styled(RoundButton)`
  height: 100%;
`;

export const Works = () => {
  return (
    <React.Fragment>
      <Container>
        <Box>
          <Heading2>Works</Heading2>
        </Box>
      </Container>
      <FullContainer>
        <WorkCardsSection global={Work1GridLayoutGlobal}>
          <ContainerMargin />
          <WarkCardTopMargin />
          <BhaaCard>
            <CardBody>
              <CardHeading>Bhaa on map</CardHeading>
              <CardDescription>
                Bhaa is a platform to create and share own maps with your friends. On this app, you can enjoy just viewing the map, or shareing it with your friends.
              </CardDescription>
            </CardBody>
          </BhaaCard>
          <WorkCard>
            <CardBody>
              <CardHeading>Linka</CardHeading>
              <CardDescription>Link Shortener is basics of feature product "Linka".</CardDescription>
            </CardBody>
          </WorkCard>
          <WorkCard>
            <CardBody>
              <CardHeading>Inception for SFC</CardHeading>
              <div>
                <Image
                  imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
                  webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp"
                  alt="Screen shots"
                  imgComponent={TileImage}
                />
                <CardDescription>
                  <CardButton>More</CardButton>
                </CardDescription>
              </div>
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
              <CardHeading>PINNA</CardHeading>
              <CardDescription>EOL</CardDescription>
            </CardBody>
          </WorkCard>
          <WorkCard>
            <CardBody>
              <CardHeading>Django Mirage</CardHeading>
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
          <WorkCard>
            <CardBody>
              <CardHeading>Notter</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </WorkCard>
          <WarkCardTopMargin />
        </WorkCardsSection>
      </FullContainer>
    </React.Fragment>
  );
}
