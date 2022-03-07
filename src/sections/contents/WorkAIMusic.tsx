import React, { Suspense } from 'react';
import styled from "styled-components";
import {
  Box,
  Image,
  CardSquare,
  CardIcon,
  Heading3,
  Heading4,
  Heading5,
  Flex,
  Spacer,
} from '../../components';
import { AIMusicContent } from './WorkAIMusicContent';

const BgDescript = React.lazy(() =>
  import('./WorkAIMusicContent').then((module) => ({
    default: module.BgDescript,
  }))
);

const CsDescript = React.lazy(() =>
  import('./WorkAIMusicContent').then((module) => ({
    default: module.CsDescript,
  }))
);

const TechDescript = React.lazy(() =>
  import('./WorkAIMusicContent').then((module) => ({
    default: module.TechDescript,
  }))
);


// Componets
// -------------------------------------------------------
const ModalImage = styled.img.attrs(props => ({
  width: props.width || '100%',
}))`
  max-width: ${props => props.width};
  object-fit: cover;
`;

// Main Page
// -------------------------------------------------------
export const WorkAIMusic = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
      <Box marginBottom="2em">
        <Heading3>AI作曲システム</Heading3>
      </Box>
      <Box center width='100%'>
        <Image
          imgSrc={AIMusicContent.section1.headingImagePng}
          webPSrc={AIMusicContent.section1.headingImageWebP}
          alt="Screen shots"
          imgComponent={ModalImage}
          width="30%"
        />
      </Box>
      <Suspense fallback={<div />}>
        <Box marginTop="3em" marginBottom="1em">
          <Heading5>ピンと来る曲が見つからない</Heading5>
        </Box>
        <BgDescript />
      </Suspense>


      <Suspense fallback={<div />}>
        <Box marginTop="3em" marginBottom="1em">
          <Heading5 style={{ transform: 'rotate(-5deg)' }}>作曲は</Heading5>
          <Heading5 style={{ marginLeft: "2.5em", transform: 'rotate(-15deg)' }}>すっごく</Heading5>
          <Heading5 style={{ marginLeft: "7em", transform: 'rotate(-5deg)' }}>難しい</Heading5>
        </Box>
        <CsDescript />
      </Suspense>



      <Box marginTop="3em" marginBottom="1em">
        <Heading5>ならば<span style={{
          fontSize: '3rem',
          marginLeft: '5px',
          marginRight: '5px',
          background: 'linear-gradient(to right, rgba(255,15,70,1) 0%, rgba(255,193,71,1) 35%, rgba(0,212,255,1) 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}>AI</span>に作ってもらおう</Heading5>
      </Box>
      <p>人間ができないのであれば、機械にやって貰えばいいのです。</p>
      <p>そこで、機械学習モデルを用いて自動作曲ができないか研究に取り組むことにしました。</p>

      <p>詳細をお話しする前にAIで作ったメロディーから作成した楽曲をお聞きください。</p>

      <audio controls src={AIMusicContent.section2.audio}>
        お使いのブラウザは<code>audio</code> 要素をサポートしていません.
      </audio>

      <Box marginTop="3em" marginBottom="1em">
        <Heading4>使用した技術</Heading4>
      </Box>

      <Box center width='100%'>
        <Spacer />
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/tensorflow.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/python.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`https://upload.wikimedia.org/wikipedia/commons/a/a0/MIDI_LOGO.svg`} />
        </CardSquare>
        <Spacer />
      </Box>
      <Suspense fallback={<div />}>
        <TechDescript />
      </Suspense>
      <Box marginBottom='100px' />
    </Flex>
  );
};
