import React from 'react';
import Navbar from './components/Navbar';
import { Container, GridNext, GridGlobal } from './components/Grid';
import { Heading } from './components/Typography';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { Avator, Name, UserName, NameArea } from './components/AppComponent';
import { Works } from './sections/Works';
import { Writings } from './sections/Writings';
import { SkillsSection } from './sections/Skills';
import { StorySection } from './sections/StorySection';

const HeadingGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 1,
  rowEnd: 4,
};

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
        <GridNext className="Heading" global={HeadingGridLayoutGlobal}>
        </GridNext>
        <Works />
        <Writings />
        <SkillsSection />
        <GridNext global={SocialGridLayoutGlobal}>
          <Heading2>Social</Heading2>
        </GridNext>
        <GridNext global={FooterGridLayoutGlobal}>
        </GridNext>
      </Container>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default App;
