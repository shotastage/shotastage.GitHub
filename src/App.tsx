import Navbar from './components/Navbar';
import { Row, Col } from './components/Grid';
import { Card, CardBody, CardHeading, CardDescription } from './components/Cards';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { AppContainer, Avator, Name } from './components/AppComponent';

const App = () => {
  return (
    <>
      <Navbar>@shotastage</Navbar>
      <AppContainer>
        <Card>
          <CardBody>
            <Avator src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" />
            <Name>Shota Shimazu</Name>
          </CardBody>
        </Card>      
        <Row>
          <Heading2>Services</Heading2>
        </Row>
        <Row>
          <Col no={3}>
            <Card>
              <CardBody>
                <CardHeading>GeoTube</CardHeading>
                <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
              </CardBody>
            </Card>
          </Col>
          <Col no={3}>
            <Card>
              <CardBody>
                <CardHeading>GeoTube</CardHeading>
                <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
              </CardBody>
            </Card>
          </Col>
          <Col no={3}>
            <Card>
              <CardBody>
                <CardHeading>GeoTube</CardHeading>
                <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
              </CardBody>
            </Card>
          </Col>      
        </Row>
        <Row>
          <Heading2>Media</Heading2>
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
