import React, { useEffect, useState } from 'react';
import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from './env-values';
import { Flex, Navbar, Heading, Image, Footer, FooterCopyright } from './components';
import { Avator, Name, UserName } from './components/AppComponent';
import { TopBanner } from './components/TopPopup';
import styled from "styled-components";

// Page Sections
import {
  StorySection,
  Works,
  Holds,
  Writings,
  SkillsSection,
  SocialSection
} from './sections';


const BizCard = styled.div`
  max-width: 530px;
  aspect-ratio: 7 / 4;
  background: white;
  border-radius: 5px;
  box-shadow: 0 6px 12px -3px rgba(0,0,0,.3);

  @media screen and (max-width: 480px) {
    max-width: 400px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;


const MemorizedComponents = React.memo(props => {

  const userClick = () => {
    window.location.href = 'https://twitter.com/shotastage';
  };

  return (
    <React.Fragment>
      <Navbar>@bout shota</Navbar>
      <StorySection />
      <Heading style={{ display: 'flex', justifyContent: 'center' }}>
        <Flex>
          <BizCard>
            <Image
              imgSrc="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg"
              webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/b96412c26fe9490296ad05db23a692e4/IMG_0086.webp"
              alt="avator image"
              imgComponent={Avator}
            />
            <Name>Shota Shimazu</Name>
            <UserName onClick={userClick}>@shotastage</UserName>
          </BizCard>
        </Flex>
      </Heading>
      <Works />
      <Writings />
      <SkillsSection />
      <Holds />
      <SocialSection />
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
});

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    ApiClient.GET("https://shota-folio.microcms.io/api/v1/main_contents", [["X-MICROCMS-API-KEY", API_KEYS.microCMSKey]])
      .then((data: any) => {
        setMessage(data.contents);
      });
  }, []);

  return (
    <React.Fragment>
      {message !== '' && <TopBanner>{message}</TopBanner>}
      <MemorizedComponents />
    </React.Fragment>
  );
}

export default App;
