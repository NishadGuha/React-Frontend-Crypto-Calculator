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
        <div>
        <h2>Top 10 Cryptocurrencies By Market Cap</h2>
        <ul>
            {cryptos.map(crypto => 
                <li key={crypto.id}>{crypto.cmc_rank}. <b>{crypto.name}</b> {crypto.quote.USD.price} 24h Change: {crypto.quote.USD.percent_change_24h}</li>
            )}
        </ul>
        </div>
    );
    
    
}

export default Crypto;
