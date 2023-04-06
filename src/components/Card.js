import React from 'react';
import '../styles/Card.css'

const Card = (props) => {
    return(
        <div className='card' id={props.id} onClick={props.functionTrigger}>
            <img src={props.image}></img>
            <h2>{props.name}</h2>
        </div>
    );
};

export default Card;