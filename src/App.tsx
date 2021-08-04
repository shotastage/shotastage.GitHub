import Navbar from './components/Navbar';
import { AppContainer, Heading1 } from './components/AppComponent';
const App = () => {
  return (
    <>
      <Navbar>@shotastage</Navbar>
      <AppContainer>
        <Heading1>Hello</Heading1>
        <div className="App">
          <header className="App-header">
            <img src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" className="App-logo" alt="logo" />
            <p>
              This site is now under construction.
            </p>
          </header>
        </div>
      </AppContainer>
    </>
  );
}

export default App;
