import Navbar from './components/Navbar';
import { Row } from './components/Grid'; 
import { AppContainer, Avator, Name } from './components/AppComponent';

const App = () => {
  return (
    <>
      <Navbar>@shotastage</Navbar>
      <AppContainer>
        <Row>
          <Avator src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" className="App-logo" alt="logo" />
          <Name>Shota Shimazu</Name>
        </Row>
      </AppContainer>
    </>
  );
}

export default App;
