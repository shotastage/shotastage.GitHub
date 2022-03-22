import React, { /* useState, */ useEffect } from 'react';
import styled from 'styled-components';
import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from '../env-values';
import { Navbar, Input, Button, Footer, FooterCopyright } from '../components';

/*
const QRImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
*/

const AuthCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid 2px #dedede;
  border-radius: 15px;
  min-height: 500px;
  padding: 15px;
  padding-top: 0;
  margin-top: 90px;
  background-color: white;
  max-width: 410px;
  width: 80%;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    width: 80%;
    min-height: 400px;
  }
`;

const AuthCardHeadings = styled.div`
  h1,
  p {
    font-weight: bold;
    text-align: center;
  }

  h1 {
    font-size: 2.7rem;
  }
`;

const RequestHeader = [['X-MICROCMS-API-KEY', API_KEYS.microCMSKey]];

const Exchanger = () => {
  // States
  // const [images, setImages] = useState([]);
  // const [accessCode, setAccessCode] = useState('');

  useEffect(() => {
    ApiClient.GET('https://shota-folio.microcms.io/api/v1/img_objects', RequestHeader).then((data: any) => {
      // setImages(data.contents);
      console.log();
    });
  }, []);

  /*
  const onAuth = (passwd: string) => {

    let decapitalized: string = passwd.toLowerCase();

    ApiClient.GET(`https://shota-folio.microcms.io/api/v1/${decapitalized}`, RequestHeader)
    .then((data: any) => {
      setAccessCode(data.contents.accessCode);
    });
  }
  */

  return (
    <React.Fragment>
      <Navbar>@shotastage</Navbar>
      <AuthCard>
        <AuthCardHeadings>
          <h1>Access Code</h1>
          <p>アクセスコードを入力してください</p>
        </AuthCardHeadings>
        <Input placeholder="パスコード" />
        <Button>認証</Button>
      </AuthCard>

      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
};

export default Exchanger;

/*

      <h2>Exchanger</h2>
      { images.map((value) => {
        return <QRImage alt={value['object_id']} src={value['img_compressed_file']['url']} />;
      })}
 */
