import React from 'react';
import '../styles/Card.css'

const Card = () => {
    return(
        <div className='card'>
            <img src={require('../images/Izuku_Midoriya_Portrait.png')}></img>
            <h2>Izuku Midoriya</h2>
        </div>
    );
};

export default Card;