import Navbar from './components/Navbar';
import { Container, Grid } from './components/Grid';
import { Heading } from './components/Heading';
import { Card, CardIcon, CardBody, CardHeading, CardDescription } from './components/Cards';
import { Footer, FooterCopyright } from './components/Footer';
import { Heading2 } from './components/Typography';
import { Avator, Name, UserName, NameArea } from './components/AppComponent';
import { SkillsSection } from './sections/Skills';

// import TIPSTOCK from './assets/TIPSTOCK.svg';


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
          <Heading2>Works</Heading2>
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
          <Heading2>Writing</Heading2>
        </Grid>
        <Grid colStart={1} colEnd={2} rowStart={11} rowEnd={12}>
          <Card style={{ marginLeft: "8rem" }}>
            <CardBody>
              <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/tipstock.svg`} style={{width: "100%"}}/>
              <CardDescription>TIPSTOCK!はITに関するTIPSやニュースをプログラマーやエンジニアの方を含め多くの方にお届けするメディアです.</CardDescription>

            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={2} colEnd={3} rowStart={11} rowEnd={12}>
          <Card>
            <CardBody>
              <CardHeading>blog</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={3} colEnd={4} rowStart={11} rowEnd={12}>
          <Card style={{ marginRight: "8rem", background: "#1be31b" }}>
            <CardBody>
              <CardHeading>Qiita</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
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
    </>
  );
}

export default App;
