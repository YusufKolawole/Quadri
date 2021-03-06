import logo from './logo.svg';
import {AppContainer, AppHeader, AppLink, AppLogo} from './styles/App.style'


function App() {
  return (
    <AppContainer>
      <AppHeader>
        
        <AppLogo src={logo}  alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
