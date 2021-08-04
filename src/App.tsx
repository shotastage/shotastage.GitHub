import styled from 'styled-components';

import Navbar from './components/Navbar';
import { Row } from './components/Grid'; 
import { AppContainer, Heading1 } from './components/AppComponent';


const Name = styled.h1`
  font-size: 5rem;
  @media screen and (max-width: 480px) { font-size: 2rem; }
  @media (prefers-color-scheme: dark) { color: white; }
`;

const App = () => {
  return (
    <>
      <Navbar>@shotastage</Navbar>
      <AppContainer>
        <Row>
          <img src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" className="App-logo" alt="logo" />
          <Name>Shota Shimazu</Name>
        </Row>
      </AppContainer>
    </>
  );
}

export default App;
