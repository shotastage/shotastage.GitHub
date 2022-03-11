import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import {
  Box,
  Heading3,
  Heading4,
  Flex,
} from '../components';

const ModalText = styled.p`
  line-height: 3rem;
`;

export const BizCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 530px;
  aspect-ratio: 7 / 4;
  background: white;
  border-radius: 5px;
  box-shadow: 0 6px 12px -3px rgba(0,0,0,.3);

  @media screen and (max-width: 480px) {
    max-width: 400px;
    min-width: 200px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const BizDepartment = styled.span`
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;


export const BizCardButton = styled.button`
  background: none;
	border: none;
	outline: none;
	appearance: none;
  margin: 0;
  padding: 0;
  margin-top: 1em;
  font-size: 0.8rem;
  color: #707070;
`;


export const BizCardDetail = () => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
      <Heading3>{t("profile.title")}</Heading3>

      <Box marginTop="3em" marginBottom="1em">
        <Heading4>{t("profile.heading1")}</Heading4>
      </Box>

      <ModalText>
        <span>
          2020年に同大学大学院に進学。クラウドシステムの設計・実装やiOSプラットフォームの開発に従事。<br />
          研究では、主に自律分散型モバイルアプリケーションプラットフォームの研究に取り組んでいる。
        </span>
      </ModalText>

      <ModalText>
        <span>大学２年の時に新規サービスの立ち上げと事業化を思い立つ。路上アーティストに特化したライブ配信サービスを企画し、設計開発に取り組み起業するが資金不足で断念。
        </span>
      </ModalText>

      <ModalText>
        <span>
          中高を得て2016年に慶應義塾大学SFC 環境情報学部に進学。
          同年秋学期に研究室に所属し機械学習による自動作曲の研究に取り組むとともに、Webアプリケーションからモバイルアプリケーションなど開発分野の手を広げる。
          <br />
        </span>
      </ModalText>

      <ModalText>
        中学生の時にビックカメラに置いてあったMacBook Airのデザインに惹かれLinuxのカスタマイズやツールの開発、OSSへのコントリビューションを始める。<br />
      </ModalText>

      <Heading4>SHOTA's Philosophy</Heading4>
      <p>自分がソフトウェアを開発する理由はただ一つ</p>
      <p>「おもしろい」から</p>
      <p>テクノロジーを用いて使ってる人に驚きを届けられると思うからです。</p>
      <p>従って、以下のポイントは非常にこだわります。</p>
      <ul>
        <li>ユーザー視点に立った仕様の策定</li>
        <li>使っているだけで楽しさを体験できる工夫</li>
      </ul>
      <Box marginBottom='100px' />
    </Flex>
  );
};
