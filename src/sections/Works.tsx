import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  FullContainer,
  Box,
  ContainerMargin,
  Image,
  Card,
  CardBody,
  CardHeading,
  CardDescription,
  Heading2,
  Heading3,
  RoundButton,
  SHModal,
  ModalText,
  Flex,
} from '../components';
import HorizontalNoscroll from '../styles/NoneScrollBar';

const WorkCardsSection = styled(Box)`
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
  const [djModalIsOpen, setDjModalIsOpen] = useState(false);

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
                  <CardButton onClick={() => setIsOpen(true)}>More</CardButton>
                </CardDescription>
                <SHModal isOpen={modalIsOpen} onClose={() => setIsOpen(false)}>
                  <Flex flexDirection="column" alignItems="flex-start">
                    <Heading3>Inception for SFC</Heading3>
                    <p>Inception for SFCは「ORF2019」向けに開発した来場者受付システムです。</p>
                    <p>ORFは慶應義塾大学SFCが研究展示発表会で、企業の方から学生など様々な方が来場するイベントです。</p>
                    <p>そんな、イベントで来場者が最初に触るのがこの受付来場システム。最初からより良い体験を創出するためテーマである「SDGs」にマッチした、またインタラクションを取り入れたアプリケーションに仕上げました。</p>
                  </Flex>
                </SHModal>
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
              <CardDescription>
                Django MirageはDjango Frameworkを使ったWebアプリケーション開発を支援する強力なコマンドラインツールです。
                <CardButton onClick={() => setDjModalIsOpen(true)}>More</CardButton>
              </CardDescription>
              <SHModal isOpen={djModalIsOpen} onClose={() => setDjModalIsOpen(false)}>
                <Flex flexDirection="column" alignItems="flex-start">
                  <Heading3>Django Mirage</Heading3>
                  <ModalText>
                    Django MirageはDjango Frameworkを使ったWebアプリケーション開発を支援する強力なコマンドラインツールです。
                    モデル定義の自動作成など、Rails並みのCLIをDjangoにもたらします。
                    例えば、Railsには rails g model User name:string email:stringのようなコマンドがありますが、Djangoにはありません。
                    そこで、Django Mirageはこれと同様のCLIを提供しています。
                  </ModalText>
                </Flex>
              </SHModal>
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
