import logo from './vectors/coinmarketcap-1.svg';
import './App.css';
import Cryptos from './components/crypto/crypto'
import Button from '@material-ui/core/Button'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3259a8, #3298a8)',
    border: 0,
    borderRadius: 10,
    color: 'white',
    padding: '5px 15px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button 
          className={classes.root} 
          startIcon={<PlayIcon/>} 
          onClick={() => { console.log("Attributes submitted") }} 
          variant="contained" 
          color="primary">Submit</Button>
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p className="powered-by">Powered by <img src={logo} className="App-logo" alt="logo"/>
        </p>
        <Cryptos />
        <br/>
        <p>If I invested $<TextField variant="outlined" color="primary" label="Amount in USD"/> in BTC on <TextField type="date" variant="outlined" color="primary"/>, then today I would have...</p>
        <ButtonStyled />
      </header>
    </div>
  );
}

export default App;
