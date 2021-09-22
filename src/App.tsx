import Navbar from './components/Navbar';
import { Row } from './components/Grid';
import { Card } from './components/Cards';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { AppContainer, Avator, Name } from './components/AppComponent';

const App = () => {
  return (
    <>
      <Navbar>@shotastage</Navbar>
      <AppContainer>
        <Row>
          <Card>
            <Avator src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" />
            <Name>Shota Shimazu</Name>
          </Card>
        </Row>
        <Row>
          <Heading2>Works</Heading2>
        </Row>
        <Row>
          <Heading2>Blog</Heading2>
        </Row>
        <Row>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Row>
        <Row>
          <Heading2>Social</Heading2>
        </Row>
        <Row>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </Row>
        <Row>  
          <Footer>
            <FooterCopyright/>
          </Footer>  
        </Row>
      </AppContainer>
    </>
  );
}

export default App;
