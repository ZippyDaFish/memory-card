import React, { Component } from 'react';
import './styles/App.css';
import Title from './components/Title.js';
import Card from './components/Card.js'

import Denki from './images/Denki_Kaminari_Portrait.png'
import Eijirou from './images/Eijirou_Kirishima_Portrait.png'
import Fumikage from './images/Fumikage_Tokoyami_Portrait.png'
import Hanta from './images/Hanta_Sero_Portrait.png'
import Izuku from './images/Izuku_Midoriya_Portrait.png'
import Katsuki from './images/Katsuki_Bakugo_Portrait.png'
import Kouji from './images/Kouji_Kouda_Portrait.png'
import Kyouka from './images/Kyouka_Jirou_Portrait.png'
import Mashirao from './images/Mashirao_Ojiro_Portrait.png'
import Mezo from './images/Mezo_Shoji_Portrait.png'
import Mina from './images/Mina_Ashido_Portrait.png'
import Minoru from './images/Minoru_Mineta_Portrait.png'
import Momo from './images/Momo_Yaoyorozu_Portrait.png'
import Ochaco from './images/Ochaco_Uraraka_Portrait.png'
import Rikido from './images/Rikido_Sato_Portrait.png'
import Shoto from './images/Shoto_Todoroki_Portrait.png'
import Tenya from './images/Tenya_Iida_Portrait.png'
import Tooru from './images/Tooru_Hagakure_Portrait.png'
import Tsuyu from './images/Tsuyu_Asui_Portrait.png'
import Yuuga from './images/Yuuga_Aoyama_Portrait.png'

class App extends Component {
  constructor(){
    super();

    this.state = {
      clickedCardIds: []
    };
  }

  handleCardClick = (e) => {
    e.preventDefault();
    this.checkCardId(e.target.id);
  };

  checkCardId = (id) => {
    var joinedIds = this.state.clickedCardIds.concat(id);
    this.setState({
      clickedCardIds: joinedIds
    })
    console.log(this.state.clickedCardIds);
  };

  render(){
    return(
      <div className='app'>
        <Title/>
        <div className='content'>
          <Card id={1} image={Denki} name={'Denki Kaminari'} functionTrigger={this.handleCardClick}/>
          <Card id={2} image={Eijirou} name={'Eijirou Kirishima'} functionTrigger={this.handleCardClick}/>
          <Card id={3} image={Fumikage} name={'Fumikage Tokoyami'} functionTrigger={this.handleCardClick}/>
          <Card id={4} image={Hanta} name={'Hanta Sero'} functionTrigger={this.handleCardClick}/>
          <Card id={5} image={Izuku} name={'Izuku Midoriya'} functionTrigger={this.handleCardClick}/>
          <Card id={6} image={Katsuki} name={'Katsuki Bakugo'} functionTrigger={this.handleCardClick}/>
          <Card id={7} image={Kouji} name={'Kouji Kouda'} functionTrigger={this.handleCardClick}/>
          <Card id={8} image={Kyouka} name={'Kyouka Jirou'} functionTrigger={this.handleCardClick}/>
          <Card id={9} image={Mashirao} name={'Mashirao Ojiro'} functionTrigger={this.handleCardClick}/>
          <Card id={10} image={Mezo} name={'Mezo Shoji'} functionTrigger={this.handleCardClick}/>
          <Card id={11} image={Mina} name={'Mina Ashido'} functionTrigger={this.handleCardClick}/>
          <Card id={12} image={Minoru} name={'Minoru Mineta'} functionTrigger={this.handleCardClick}/>
          <Card id={13} image={Momo} name={'Momo Yaoyorozu'} functionTrigger={this.handleCardClick}/>
          <Card id={14} image={Ochaco} name={'Ochaco Uraraka'} functionTrigger={this.handleCardClick}/>
          <Card id={15} image={Rikido} name={'Rikido Sato'} functionTrigger={this.handleCardClick}/>
          <Card id={16} image={Shoto} name={'Shoto Todoroki'} functionTrigger={this.handleCardClick}/>
          <Card id={17} image={Tenya} name={'Tenya Iida'} functionTrigger={this.handleCardClick}/>
          <Card id={18} image={Tooru} name={'Tooru Hagakure'} functionTrigger={this.handleCardClick}/>
          <Card id={19} image={Tsuyu} name={'Tsuyu Asui'} functionTrigger={this.handleCardClick}/>
          <Card id={20} image={Yuuga} name={'Yuuga Aoyama'} functionTrigger={this.handleCardClick}/>
        </div>
      </div>
    );
  }
}

export default App;
