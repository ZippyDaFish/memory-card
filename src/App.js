import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className='app'>
        <div className='title'>
          Title and score go here
        </div>
        <div className='content'>
          Cards go here
        </div>
      </div>
    );
  }
}

export default App;
