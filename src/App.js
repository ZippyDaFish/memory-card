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
  }

  render(){
    return(
      <div className='app'>
        <Title/>
        <div className='content'>
          <Card image={Denki} name={'Denki Kaminari'}/>
          <Card image={Eijirou} name={'Eijirou Kirishima'}/>
          <Card image={Fumikage} name={'Fumikage Tokoyami'}/>
          <Card image={Hanta} name={'Hanta Sero'}/>
          <Card image={Izuku} name={'Izuku Midoriya'}/>
          <Card image={Katsuki} name={'Katsuki Bakugo'}/>
          <Card image={Kouji} name={'Kouji Kouda'}/>
          <Card image={Kyouka} name={'Kyouka Jirou'}/>
          <Card image={Mashirao} name={'Mashirao Ojiro'}/>
          <Card image={Mezo} name={'Mezo Shoji'}/>
          <Card image={Mina} name={'Mina Ashido'}/>
          <Card image={Minoru} name={'Minoru Mineta'}/>
          <Card image={Momo} name={'Momo Yaoyorozu'}/>
          <Card image={Ochaco} name={'Ochaco Uraraka'}/>
          <Card image={Rikido} name={'Rikido Sato'}/>
          <Card image={Shoto} name={'Shoto Todoroki'}/>
          <Card image={Tenya} name={'Tenya Iida'}/>
          <Card image={Tooru} name={'Tooru Hagakure'}/>
          <Card image={Tsuyu} name={'Tsuyu Asui'}/>
          <Card image={Yuuga} name={'Yuuga Aoyama'}/>
        </div>
      </div>
    );
  }
}

export default App;
