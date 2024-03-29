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
      clickedCardIds: [],
      score: 0,
      best: 0,
      heroCards: [
        <Card id={1} key="1" image={Denki} name={'Denki Kaminari'} functionTrigger={this.handleCardClick}/>,
        <Card id={2} key="2" image={Eijirou} name={'Eijirou Kirishima'} functionTrigger={this.handleCardClick}/>,
        <Card id={3} key="3" image={Fumikage} name={'Fumikage Tokoyami'} functionTrigger={this.handleCardClick}/>,
        <Card id={4} key="4" image={Hanta} name={'Hanta Sero'} functionTrigger={this.handleCardClick}/>,
        <Card id={5} key="5" image={Izuku} name={'Izuku Midoriya'} functionTrigger={this.handleCardClick}/>,
        <Card id={6} key="6" image={Katsuki} name={'Katsuki Bakugo'} functionTrigger={this.handleCardClick}/>,
        <Card id={7} key="7" image={Kouji} name={'Kouji Kouda'} functionTrigger={this.handleCardClick}/>,
        <Card id={8} key="8" image={Kyouka} name={'Kyouka Jirou'} functionTrigger={this.handleCardClick}/>,
        <Card id={9} key="9" image={Mashirao} name={'Mashirao Ojiro'} functionTrigger={this.handleCardClick}/>,
        <Card id={10} key="10" image={Mezo} name={'Mezo Shoji'} functionTrigger={this.handleCardClick}/>,
        <Card id={11} key="11" image={Mina} name={'Mina Ashido'} functionTrigger={this.handleCardClick}/>,
        <Card id={12} key="12" image={Minoru} name={'Minoru Mineta'} functionTrigger={this.handleCardClick}/>,
        <Card id={13} key="13" image={Momo} name={'Momo Yaoyorozu'} functionTrigger={this.handleCardClick}/>,
        <Card id={14} key="14" image={Ochaco} name={'Ochaco Uraraka'} functionTrigger={this.handleCardClick}/>,
        <Card id={15} key="15" image={Rikido} name={'Rikido Sato'} functionTrigger={this.handleCardClick}/>,
        <Card id={16} key="16" image={Shoto} name={'Shoto Todoroki'} functionTrigger={this.handleCardClick}/>,
        <Card id={17} key="17" image={Tenya} name={'Tenya Iida'} functionTrigger={this.handleCardClick}/>,
        <Card id={18} key="18" image={Tooru} name={'Tooru Hagakure'} functionTrigger={this.handleCardClick}/>,
        <Card id={19} key="19" image={Tsuyu} name={'Tsuyu Asui'} functionTrigger={this.handleCardClick}/>,
        <Card id={20} key="20" image={Yuuga} name={'Yuuga Aoyama'} functionTrigger={this.handleCardClick}/>
      ]
    };
  }

  handleCardClick = (e) => {
    e.preventDefault();
    this.checkCardId(e.target.id);
  };

  checkCardId = (id) => {
    if(this.state.clickedCardIds.includes(id)){
      this.resetScore();
      return;
    }

    var joinedIds = this.state.clickedCardIds.concat(id);
    this.setState({
      clickedCardIds: joinedIds
    }, function(){this.updateScore()})
  };

  updateScore = () => {
    var currentScore = this.state.clickedCardIds.length;
    var newBest = this.state.best;

    if(currentScore >= this.state.best){
      newBest = currentScore;
    }

    this.setState({
      score: currentScore,
      best: newBest
    });
  }

  resetScore = () => {
    this.setState({
      score: 0,
      clickedCardIds: []
    });
  }

  render(){
    var renderedCards = this.state.heroCards;
    renderedCards.sort(() => Math.random() - 0.5)

    return(
      <div className='app'>
        <Title score={this.state.score} best={this.state.best}/>
        <div className='content'>
          {renderedCards}
        </div>
      </div>
    );
  }
}

export default App;
