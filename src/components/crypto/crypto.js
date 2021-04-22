import React, { useState, useEffect } from 'react';
import './crypto.css';

function Crypto() {
    
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetch('api/crypto')
            .then(res => res.json())
            .then(cryptoData => setCryptos(cryptoData));
    }, []);
    
    return (
        <div>
        <h2>Customers</h2>
        <ul>
            {cryptos.map(crypto => 
                <li key={crypto.data.id}>{crypto.data.name} {crypto.data.quote.USD.price}</li>
            )}
        </ul>
        </div>
    );
    
    
}

export default Crypto;
