import React, { Component } from 'react';
import './styles/App.css';
import Title from './components/Title.js';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className='app'>
        <Title/>
        <div className='content'>
          Cards go here
        </div>
      </div>
    );
  }
}

export default App;
