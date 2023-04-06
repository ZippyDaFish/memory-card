import React from 'react';
import '../styles/Title.css';

const Title = (props) => {
    return(
        <div className='title'>
            <div>
                <h1>My Hero Memory!</h1>
                <h3>Try to click all the cards, but don't click one more than once!</h3>
            </div>
            <div>
                <h3>Score: {props.score}</h3>
                <h3>High Score: {props.best}</h3>
            </div>
        </div>
    );
};

export default Title;