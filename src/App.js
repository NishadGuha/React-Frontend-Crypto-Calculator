import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers'
import Cryptos from './components/crypto/crypto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Customers />
        <Cryptos />
      </header>
    </div>
  );
}

export default App;
