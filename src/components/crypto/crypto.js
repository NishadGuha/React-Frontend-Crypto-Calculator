import React, { useState, useEffect } from 'react';
import './crypto.css';

function Crypto() {
    
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetch('api/crypto')
            .then(res => res.json())
            .then(cryptoData => setCryptos(cryptoData.data))
    }, []);
    
    return (
        <div className="main-div">
        <h2>Top 10 Cryptocurrencies<br/>
             By Market Cap</h2>
        <ul>
            {cryptos.map(crypto => 
                <li key={crypto.id}>
                {crypto.cmc_rank}. <b>{crypto.name} </b> 
                {Math.round(crypto.quote.USD.price*100)/100} <br/> 24h Change: 
                <div className={(crypto.quote.USD.percent_change_24h < 0) ? "price-drop" : "price-moon"}>{crypto.quote.USD.percent_change_24h}</div>
                </li>
            )}
        </ul>
        </div>
    );
    
    
}

export default Crypto;
