import logo from './logo.svg';
import './App.css';
import Cryptos from './components/crypto/crypto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cryptos />
      </header>
    </div>
  );
}

export default App;
