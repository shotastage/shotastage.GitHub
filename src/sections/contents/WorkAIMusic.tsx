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

const ModalImage = styled.img.attrs(props => ({
  width: props.width || '100%',
}))`
  max-width: ${props => props.width};
  object-fit: cover;
`;

export const WorkAIMusic = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
      <Heading3>AI作曲システム</Heading3>
      <Box center width='100%'>
        <Image
          imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
          webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp"
          alt="Screen shots"
          imgComponent={ModalImage}
          width="30%"
        />
      </Box>
      <p>現代の作曲家は</p>

      <Box marginTop="1em" marginBottom="1em">
        <Heading4>実際にAIを使って作成した楽曲</Heading4>
      </Box>

      <audio
        controls
        src="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2FRNN%20Generated%20Music%20%202017_06_24.mp3?alt=media&token=61861644-13a5-4151-92c7-6384dbcfda3f">
        お使いのブラウザは
        <code>audio</code> 要素をサポートしていません.
      </audio>


      <Box marginTop="3em" marginBottom="1em">
        <Heading4>使用した技術</Heading4>
      </Box>


      <Box center width='100%'>
        <Spacer />
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/react.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/python.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/html-5.svg`} />
        </CardSquare>
        <Spacer />
      </Box>
      <p>
        開発期間が非常に短かったこともありプロトタイピングと同時にプロダクトが完成するようなもので開発したいという考えから、React Nativeを使用して開発しました。
        従って、開発言語はJavaScriptを用いています。また、バックエンドにはFirebaseをし使用しています。
      </p>
      <Box marginBottom='100px' />
    </Flex>
  );
};
