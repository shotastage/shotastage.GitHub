import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Footer, FooterCopyright } from '../components/Footer';
import { Name, UserName, NameArea } from '../components/AppComponent';

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar>@shotastage</Navbar>
      <Container>
        <Grid colStart={1} colEnd={4} rowStart={1} rowEnd={4}>
          <Heading>
            <NameArea>
              <Name>404 Not Found</Name>
              <UserName>Requested page does not exist!</UserName>
            </NameArea>
          </Heading>
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

export default NotFound;
