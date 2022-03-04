import styled from 'styled-components';
import {
  Box,
  Heading3,
  Heading4,
  Flex,
} from '../components';

const ModalText = styled.p`
line-height: 3rem;
`;

export const BizCardDetail = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
      <Heading3>プロフィール</Heading3>

      <Heading4>経歴</Heading4>
      <ModalText>
        <span>オシャレCity🏙横浜🏙に程近い🌳🌳森🌳🌳の中で産声をあげる。<br /></span>
        <span>幼少期は近所の🐔ニワトリパークに散歩に行くのが日課。<br /></span>
        <span>当時、VAIOのWin95機が家にあった。また、💾フロッピーディスク💾もあり恐らく私の年齢では数少ないFD使用経験者。<br /></span>
      </ModalText>
      <ModalText>
        <span>
          初めてのプログラミングは、小学生の時に親に買ってもらった🤖ロボット制御🤖プログラミング。<br />
          結構高かった💸💸らしいが、残念ながら挫折する。<br />
        </span>
      </ModalText>

      <ModalText>
        <span>
          家のパソコンがVAIOに変わる。<br />
          パソコンオタクになる。<br />
        </span>

        <span>
          中学に進学。ビックカメラに置いてあったMacBook Airのデザインに惹かれLinuxのカスタマイズやツールの開発、OSSへのコントリビューションを始める。<br />
        </span>

        <span>
          中高を得て2016年に慶應義塾大学SFC 環境情報学部に進学。
          研究活動では機械学習による自動作曲の研究に取り組むとともに、Webアプリケーションからモバイルアプリケーションなど開発分野の手を広げる。
          <br />
        </span>
        <span>
          2020年に同大学大学院に進学。クラウドシステムの設計・実装やiOSプラットフォームの開発に従事。<br />
          研究では、主に自律分散型モバイルアプリケーションプラットフォームの研究に取り組んでいる。
        </span>
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
