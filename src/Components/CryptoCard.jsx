import React from 'react';


const CryptoCard  = ({crypto}) => {
    return ( 
        <div className='cryptoData'>
            <p>{crypto.market_cap_rank}</p>
            <h1>{crypto.name}</h1>
            <p>{crypto.current_price}</p>
            <p>{crypto.price_change_24h}</p>

        </div>
     );
}
 
export default CryptoCard ;