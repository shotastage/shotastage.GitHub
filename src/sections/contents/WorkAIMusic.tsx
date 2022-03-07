import React, { Suspense } from 'react';
import styled from "styled-components";
import {
  Box,
  Image,
  CardSquare,
  CardIcon,
  Heading3,
  Heading4,
  Flex,
  Spacer,
} from '../../components';
import { AIMusicContent } from './WorkAIMusicContent';

const BgDescript = React.lazy(() =>
  import('./WorkAIMusicContent').then((module) => ({
    default: module.BgDescript,
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
      <Heading3>AI作曲システム</Heading3>
      <Box center width='100%'>
        <Image
          imgSrc={AIMusicContent.section1.headingImagePng}
          webPSrc={AIMusicContent.section1.headingImageWebP}
          alt="Screen shots"
          imgComponent={ModalImage}
          width="30%"
        />
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <BgDescript />
      </Suspense>

      <Box marginTop="1em" marginBottom="1em">
        <Heading4>実際にAIを使って作成した楽曲</Heading4>
      </Box>

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
      <Suspense fallback={<div>Loading...</div>}>
        <TechDescript />
      </Suspense>
      <Box marginBottom='100px' />
    </Flex>
  );
};
