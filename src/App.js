import { useEffect } from 'react'
import logo from './vectors/coinmarketcap-1.svg'
import './App.css';
import Cryptos from './components/crypto/crypto'

import Button from '@material-ui/core/Button'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import WebFont from 'webfontloader'


import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Video from './vectors/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './styles/HeroElements';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #13a81c, #12c788)',
    border: 0,
    borderRadius: 10,
    color: 'white',
    padding: '5px 15px',
    position: 'relative',
    top: '20px',
    left: '-40px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button 
          className={classes.root} 
          startIcon={<PlayIcon/>} 
          onClick={() => { console.log("Attributes submitted") }} 
          variant="contained" 
          color="primary">Calculate</Button>
}

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
   }, []);

  return (
    <div className="App">
      <header className="App-header">
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <AppBar style={{background: '#0c943e'}}>
          <ToolBar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography className="app-title" variant="h6">
              Cryptocurrency Profit Calculator
            </Typography>
            <Button className="about-button">
              About
            </Button>
          </ToolBar>
        </AppBar>
        <p className="powered-by">Powered by <img src={logo} className="app-logo" alt="logo"/>
        </p>
        <Cryptos />
        <br/>
        <p className="tool">If I invested $<TextField variant="filled" color="primary" label="Amount in USD"/> in BTC on <TextField type="date" variant="outlined" color="primary"/>, then today I would have...</p>
        <ButtonStyled />
      </HeroContainer>
      </header>
    </div>
  );
}

export default App;
