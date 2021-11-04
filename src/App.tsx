import React from 'react';
import Navbar from './components/Navbar';
import { Container, Grid, GridGlobal } from './components/Grid';
import { Heading } from './components/Typography';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { Avator, Name, UserName, NameArea } from './components/AppComponent';
import { Works } from './sections/Works';
import { Writings } from './sections/Writings';
import { SkillsSection } from './sections/Skills';
import { StorySection } from './sections/StorySection';
import { DevelPopup } from './components/DevelPopup';

const SocialGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 17,
  rowEnd: 18,
}

const FooterGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 19,
  rowEnd: 20,
}

const App = () => {

  const userClick = () => {
    window.location.href = 'https://twitter.com/shotastage';
  };

  return (
    <React.Fragment>
      <DevelPopup>
        <p>このページは現在開発中です。ご不便をおかけしますが、ご了承ください。</p>
      </DevelPopup>
      <Navbar>@shotastage</Navbar>
      <StorySection />
      <Heading>
        <Avator src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" />
        <NameArea>
          <Name>Shota Shimazu</Name>
          <UserName onClick={userClick}>@shotastage</UserName>
        </NameArea>
      </Heading>
      <Container>
        <Works />
        <Writings />
        <SkillsSection />
        <Grid global={SocialGridLayoutGlobal}>
          <Heading2>Social</Heading2>
        </Grid>
        <Grid global={FooterGridLayoutGlobal}>
        </Grid>
      </Container>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default App;
