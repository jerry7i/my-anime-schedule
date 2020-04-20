import React, { Component } from 'react';
import './App.css';
import AniCards, { aniCardsStyle } from './components/AniCards';

import jikanjs from 'jikanjs';

class App extends Component {
  state = {
    animes: []
  }

  componentDidMount() {
    this.loadSeason()
  }

  loadSeason() {
    jikanjs.loadSeason(2020, 'spring').then((response) => {
      let aniArray = response.anime.slice(0,20);
      aniArray.forEach((ani) => {
        ani.key = ani.mal_id
      });
      this.setState({
        animes: aniArray
      })
      
    }).catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <AniCards style={ aniCardsStyle } animes={this.state.animes}/>
    )
  }
}

export default App;
