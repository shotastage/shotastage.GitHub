import Navbar from './components/Navbar';
import { Container, Grid } from './components/Grid';
import { Heading } from './components/Heading';
import { Card, CardBody, CardHeading, CardDescription } from './components/Cards';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { Avator, Name, UserName, NameArea } from './components/AppComponent';

const App = () => {
  return (
    <>
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
        <Grid colStart={1} colEnd={4} rowStart={5} rowEnd={6}>
          <Heading2>Services</Heading2>
        </Grid>
        <Grid colStart={1} colEnd={2} rowStart={7} rowEnd={8}>
          <Card style={{ marginLeft: "8rem" }}>
            <CardBody>
              <CardHeading>GeoTube</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={2} colEnd={3} rowStart={7} rowEnd={8}>
          <Card>
            <CardBody>
              <CardHeading>Link Shortener</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={3} colEnd={4} rowStart={7} rowEnd={8}>
          <Card style={{ marginRight: "8rem" }}>
            <CardBody>
              <CardHeading>Notter</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={1} colEnd={4} rowStart={9} rowEnd={10}>
          <Heading2>Skills</Heading2>
        </Grid>
        <Grid colStart={1} colEnd={4} rowStart={11} rowEnd={12} style={{display: "flex"}}>
          <Card>
            <CardBody>
              <CardHeading>Swift</CardHeading>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardHeading>TypeScript</CardHeading>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardHeading>Python</CardHeading>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardHeading>React</CardHeading>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardHeading>HTML5/CSS3/Sass</CardHeading>
            </CardBody>
          </Card>
        </Grid>

        <Grid colStart={1} colEnd={4} rowStart={13} rowEnd={14}>
          <Heading2>Skills</Heading2>
        </Grid>
        <Grid colStart={1} colEnd={4} rowStart={15} rowEnd={16}>
          <Footer>
            <FooterCopyright />
          </Footer>
        </Grid>
      </Container>
    </>
  );
}

export default App;
