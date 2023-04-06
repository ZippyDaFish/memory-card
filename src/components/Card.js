import React from 'react';
import '../styles/Card.css'

const Card = (props) => {
    return(
        <div className='card'>
            <img src={props.image}></img>
            <h2>{props.name}</h2>
            <button id={props.id} onClick={props.functionTrigger}>Select</button>
        </div>
    );
};

export default Card;