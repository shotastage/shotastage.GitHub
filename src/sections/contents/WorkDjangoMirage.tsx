import styled from "styled-components";
import {
  Box,
  Image,
  Heading3,
  ModalText,
  Flex,
  Button,
} from '../../components';

const ModalImage = styled.img.attrs(props => ({
  width: props.width || '100%',
}))`
  max-width: ${props => props.width};
  object-fit: cover;
`;

export const WorksDjangoMirage = () => {

  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Box center width='100%'>
        <Image
          imgSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Fdjmirage%2Fdjmirage_logo.png?alt=media"
          webPSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Fdjmirage%2Fdjmirage_logo.webp?alt=media"
          alt="Mirage Django Logo"
          imgComponent={ModalImage}
        />
      </Box>
      <Heading3>Django Mirage</Heading3>
      <ModalText>
        Django MirageはDjango Frameworkを使ったWebアプリケーション開発を支援する強力なコマンドラインツールです。
        モデル定義の自動作成など、Rails並みのCLIをDjangoにもたらします。
        例えば、Railsには rails g model User name:string email:stringのようなコマンドがありますが、Djangoにはありません。
        そこで、Django Mirageはこれと同様のCLIを提供しています。
      </ModalText>
      <Button onClick={() => window.location.href = 'https://github.com/shotastage/mirage-django-lts'}>Github Repository</Button>
      <Box marginBottom='100px' />
    </Flex>
  );
};
