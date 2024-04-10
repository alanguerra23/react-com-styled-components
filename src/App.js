import logo from './logo.svg';
import { AppStyled } from './styled';

function App() {
  return (
    <AppStyled className="App">
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppStyled>
  );
}

export default App;
