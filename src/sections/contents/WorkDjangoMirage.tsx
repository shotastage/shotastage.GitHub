import styled from "styled-components";
import {
  Box,
  Image,
  Heading3,
  Heading4,
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
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
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

      <Heading4>背景</Heading4>
      <ModalText>
        DjangoはRailsに並ぶフルスタックのWebアプリケーションフレームワークです。
        強力なテンプレートエンジンやORMなどを備え、シンプルで少ない記述量で高機能なWebアプリケーションを作成することが可能です。
        特にDjangoはPythonで記述されているため、昨今の機械学習を利用してシステムとの相性が良く日本においても採用事例が多くなってきています。
        一方で、フルスタックなWebアプリケーションフレームワークとしては周辺ツールやユーティリティ類が貧弱な印象があるのも事実です。
        例えば、Railsでは強力なCLIにより大抵の作業はコマンドを実行するだけでできます。
        そこで、DjangoにもRailsのCLIのような機能を実装することで開発の過程で行う作業の自動化を行い効率化を図りました。
      </ModalText>

      <Heading4>主な機能</Heading4>
      <table style={{ border: "1px solid #333" }}>
        <thead>
          <tr>
            <th>Commands</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #333" }}>new</td>
            <td style={{ border: "1px solid #333" }}>Create a new Django project.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>new:react</td>
            <td style={{ border: "1px solid #333" }}>Create a new Django API project with React.js front-end.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>new:ng</td>
            <td style={{ border: "1px solid #333" }}>Create a new Django API project with Angular.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>c or console</td>
            <td style={{ border: "1px solid #333" }}>Launch Django Python shell.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>c:db</td>
            <td style={{ border: "1px solid #333" }}>Launch databse shell.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>db:migrate</td>
            <td style={{ border: "1px solid #333" }}>Create and apply new migrations.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>db:merge</td>
            <td style={{ border: "1px solid #333" }}>Merge fragmented migrations.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #333" }}>db:reset</td>
            <td style={{ border: "1px solid #333" }}>Clear all tables and data. (SQLite debuggable only)</td>
          </tr>
        </tbody>
      </table>

      <Box marginBottom='80px' />
    </Flex>
  );
};
