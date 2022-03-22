import React, { useEffect } from 'react';
import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from '../env-values';
import { Navbar, Heading, Container, Footer, FooterCopyright } from '../components';
import { Name, UserName, NameArea } from '../components/AppComponent';

const SKESystem = () => {
  useEffect(() => {
    ApiClient.GET('https://shota-folio.microcms.io/api/v1/story', [['X-MICROCMS-API-KEY', API_KEYS.microCMSKey]]).then(
      (data: any) => {
        //setStories(data.contents);
      }
    );
  }, []);

  const userClick = () => {
    window.location.href = 'https://twitter.com/shotastage';
  };

  return (
    <React.Fragment>
      <Navbar>SKE System</Navbar>
      <Heading>
        <NameArea>
          <Name>Input credentials</Name>
          <UserName onClick={userClick}>@shotastage</UserName>
        </NameArea>
      </Heading>
      <Container></Container>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
};

export default SKESystem;
