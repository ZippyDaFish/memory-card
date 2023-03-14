import React from 'react';
import '../styles/Title.css';

const Title = (props) => {
    return(
        <div className='title'>
            <h1>My Hero Memory!</h1>
            <div>
                <h3>Score: {props.score}</h3>
                <h3>High Score: {props.highScore}</h3>
            </div>
        </div>
    );
};

export default Title;