import { useEffect, useState } from 'react'
import logo from './vectors/coinmarketcap-1.svg'
import './App.css';
import Cryptos from './components/crypto/crypto'

import Button from '@material-ui/core/Button'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Grid } from '@material-ui/core';
import Video from './vectors/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './styles/HeroElements';
import NavBar from './components/navbar/navbar'
import { BrowserRouter as Router } from 'react-router-dom'

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
          id="submit-button"
          className={classes.root}
          startIcon={<PlayIcon/>}
          variant="contained" 
          type="submit"
          color="primary">Calculate</Button>
}

function App() {

  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");
  const [result, setResult] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    var newDate = date.substring(8) + "-" + date.substring(5,8) + date.substring(0,4);
    const data = {amount, newDate};

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch('result', options);
    const json = await response.json();
    setResult(json.currentFiat);
  }

  return (
    <div className="App">
      <header className="App-header">
      <HeroContainer>
        {/* <Router>
          <NavBar/>
        </Router> */}
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <AppBar style={{background: '#0c943e'}}>
          <ToolBar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography id="title-name" className="app-title" variant="h6">
              Cryptocurrency Profit Calculator
            </Typography>
            <Button className="about-button" id="about-button">
              About
            </Button>
          </ToolBar>
        </AppBar>
        <p className="powered-by" id="powered-by">Powered by <img src={logo} className="app-logo" alt="logo"/>
        </p>
        <Cryptos id="price-list" className="crypto-list"/>
        <br/>
        <br/>
        <form className="tool" onSubmit={handleSubmit}>
        If I invested $<TextField value={amount} onInput={ e=>setAmount(e.target.value)} id="textfield-1" variant="filled" color="primary" label="Amount in USD"/> in BTC on <TextField value={date} onInput={ e=>setDate(e.target.value)} type="date" variant="outlined" color="primary"/>, then today I would have {result}
        <ButtonStyled />
        </form>
      </HeroContainer>
      </header>
    </div>
  );
}

export default App;
