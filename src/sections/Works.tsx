import React, { Suspense, useState } from "react";
import styled from "styled-components";
import {
  Container,
  FullContainer,
  Box,
  Spacer,
  Flex,
  ContainerMargin,
  Image,
  Card,
  CardHeading,
  CardDescription,
  Heading2,
  RoundButton,
  SHModal,
} from '../components';
import HorizontalNoscroll from '../styles/NoneScrollBar';

const WorksInception = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorksInception,
  }))
);

const WorksLaboPortal = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorksLaboPortal,
  }))
);

const WorksDjangoMirage = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorksDjangoMirage,
  }))
);

const WorksShotachCom = React.lazy(() =>
  import('./contents/WorksContents').then((module) => ({
    default: module.WorksShotachCom,
  }))
);

const WorkCardsSection = styled(Box)`
  width: 100vw;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  color: inherit;
  ${HorizontalNoscroll}
`;

const WorkCard = styled(Card)`
  min-height: 400px;
  max-height: 400px;
  min-width: 250px;
  max-width: 250px;
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

const TileImage = styled.img`
  max-width: 150px;
  object-fit: cover;
  margin-left: calc((100% - 150px) / 2);
`;

const CardButton = styled(RoundButton)`
  height: 100%;
`;

export const Works = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [laboPortalIsOpen, setLaboPortalIsOpen] = useState(false);
  const [djModalIsOpen, setDjModalIsOpen] = useState(false);
  const [siteModalIsOpen, setSiteModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Box marginTop='80px' marginBottom='30px'>
          <Heading2>Works</Heading2>
        </Box>
      </Container>
      <FullContainer>
        <WorkCardsSection>
          <ContainerMargin />
          <WarkCardTopMargin />
          <BhaaCard>
            <CardHeading>Bhaa</CardHeading>
            <CardDescription>
              Bhaa is a platform to create and share own maps with your friends. On this app, you can enjoy just viewing the map, or shareing it with your friends.
            </CardDescription>
          </BhaaCard>
          <WorkCard>
            <CardHeading>Linka</CardHeading>
            <CardDescription>Link Shortener is basics of feature product "Linka".</CardDescription>
          </WorkCard>
          <WorkCard>
            <CardHeading>Inception for SFC</CardHeading>
            <Box center>
              <Image
                imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
                webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp"
                alt="Screen shots"
                imgComponent={TileImage}
              />
            </Box>
            <Spacer />
            <CardDescription>
              <p>ORF2019で使用した受付システムです</p>
              <Flex>
                <CardButton onClick={() => setIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={modalIsOpen} onClose={() => setIsOpen(false)}>
              <Suspense fallback={<div/>}>
                <WorksInception />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>Labo Portal</CardHeading>
            <Box center>
              <Image
                imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
                webPSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.54.02.webp?alt=media"
                alt="Screen shots"
                imgComponent={TileImage}
              />
            </Box>
            <Spacer />
            <CardDescription>
              <p>研究室運営のためのWebアプリケーションポータルサイト</p>
              <Flex>
                <CardButton onClick={() => setLaboPortalIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={laboPortalIsOpen} onClose={() => setLaboPortalIsOpen(false)}>
              <Suspense fallback={<div/>}>
                <WorksLaboPortal />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>PINNA</CardHeading>
            <CardDescription>EOL</CardDescription>
          </WorkCard>
          <WorkCard>
            <CardHeading>Django Mirage</CardHeading>
            <Spacer />
            <CardDescription>
              <p>
                Django MirageはDjango Frameworkを使ったWebアプリケーション開発を支援する強力なコマンドラインツールです。
              </p>
              <Flex>
                <CardButton onClick={() => setDjModalIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={djModalIsOpen} onClose={() => setDjModalIsOpen(false)}>
              <Suspense fallback={<div/>}>
                <WorksDjangoMirage />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>shotach.com</CardHeading>
            <CardDescription>
              <p>今、あなたが見ているこのサイトです</p>
              <Flex>
                <CardButton onClick={() => setSiteModalIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={siteModalIsOpen} onClose={() => setSiteModalIsOpen(false)}>
              <Suspense fallback={<div/>}>
                <WorksShotachCom />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </WorkCard>
          <WorkCard>
            <CardHeading>Notter</CardHeading>
            <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
          </WorkCard>
          <WarkCardTopMargin />
        </WorkCardsSection>
      </FullContainer>
    </React.Fragment>
  );
}
