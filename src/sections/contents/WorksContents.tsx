import styled from "styled-components";
import {
  Box,
  Image,
  CardSquare,
  CardIcon,
  Heading3,
  Heading4,
  ModalText,
  Flex,
} from '../../components';

const ModalImage = styled.img`
  max-width: 150px;
  object-fit: cover;
`;

export const WorksInception = () => {
return (
  <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
  <Heading3>Inception for SFC</Heading3>
  <Box>
    <Image
      imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
      webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp"
      alt="Screen shots"
      imgComponent={ModalImage}
    />
  </Box>
  <p>Inception for SFCは「ORF2019」向けに開発した来場者受付システムです。</p>
  <p>ORFは慶應義塾大学SFCが研究展示発表会で、企業の方から学生など様々な方が来場するイベントです。</p>
  <p>そんな、イベントで来場者が最初に触るのがこの受付来場システム。最初からより良い体験を創出するためテーマである「SDGs」にマッチした、またインタラクションを取り入れたアプリケーションに仕上げました。</p>

  <Heading4>オペレーションシステム</Heading4>
  <Image
    imgSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Freception_slack_integration.png?alt=media"
    webPSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Freception_slack_integration.webp?alt=media"
    alt="Screen shots"
    imgComponent={ModalImage}
  />
  <p>この受付システムは、イベントを運営する管理スタッフ側の機能も備えてます。例えば、受付アプリケーションでエラーが発生した場合、その場にいるスタッフが「担当者を呼ぶ」というボタンを押すことで
    上のようにデバイスIDが通知されます。これによって、手の空いてるスタッフがどの端末で問題が起きたかを即座に把握して対応することができます。
    (幸いなことに、２日間でこの機能にお世話になることはありませんでした。)
  </p>

  <Heading4>分析システム</Heading4>
  <Image
    imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
    webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp"
    alt="Screen shots"
    imgComponent={ModalImage}
  />
  <p>来場者の数や、どのゲートでどれくらい入場したかのデーターをリアルタイムで表示するWebアプリケーションの作成を行いました。</p>
</Flex>
);
};

export const WorksDjangoMirage = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Heading3>Django Mirage</Heading3>
      <ModalText>
        Django MirageはDjango Frameworkを使ったWebアプリケーション開発を支援する強力なコマンドラインツールです。
        モデル定義の自動作成など、Rails並みのCLIをDjangoにもたらします。
        例えば、Railsには rails g model User name:string email:stringのようなコマンドがありますが、Djangoにはありません。
        そこで、Django Mirageはこれと同様のCLIを提供しています。
      </ModalText>
    </Flex>
  );
};

export const WorksShotachCom = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
      <Heading3>shotach.com</Heading3>
      <p>https://shotach.comは@shotasgaeのポートフォリオサイトです。</p>

      <Heading4>使用した技術</Heading4>
      <Flex justifyContent="space-around">
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/react.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/typescript-icon.svg`} />
        </CardSquare>
      </Flex>
      <p>
        このサイトはReactを使用してFull-TypeScriptで記述しています。
      </p>
    </Flex>
  );
};
