import React from 'react';
import Navbar from './components/Navbar';
import { Container, Grid } from './components/Grid';
import { Heading } from './components/Heading';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { Avator, Name, UserName, NameArea } from './components/AppComponent';
import { Works } from './sections/Works';
import { Writings } from './sections/Writings';
import { SkillsSection } from './sections/Skills';

// import TIPSTOCK from './assets/TIPSTOCK.svg';


const App = () => {
  alert("このサイトは現在作成中です。");
  return (
    <React.Fragment>
      <Navbar>@shotastage</Navbar>
      <Container>
        <Grid colStart={1} colEnd={4} rowStart={1} rowEnd={4}>
          <Heading>
            <Avator src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" />
            <NameArea>
              <Name>Shota Shimazu</Name>
              <UserName>@shotastage</UserName>
            </NameArea>
          </Heading>
        </Grid>
        <Works />
        <Writings />
        <SkillsSection />
        <Grid colStart={1} colEnd={4} rowStart={17} rowEnd={18}>
          <Heading2>Social</Heading2>
        </Grid>
        <Grid colStart={1} colEnd={4} rowStart={19} rowEnd={20}>
          <Footer>
            <FooterCopyright />
          </Footer>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
