import React, { Component } from 'react';
import './App.css';
import AniCards, { aniCardsStyle } from './components/AniCards';

import jikanjs from 'jikanjs';

class App extends Component {
  state = {
    animes: [],

  }

  componentDidMount() {
    this.loadSeason()
  }

  async loadSeason() {
    try {
      const res = await jikanjs.loadSeason(2020, 'spring');
      this.setState({
        animes: res.anime.slice(0,20)
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  addAnime(anime) {
    console.log(`add ${anime}`);
  }

  delAnime(anime) {
    console.log(`del ${anime}`)
  }

  render() {
    return (
      <AniCards 
        style={ aniCardsStyle } 
        animes={ this.state.animes } 
        addAnime={ this.addAnime }
        delAnime={ this.delAnime }
      />
    )
  }
}

export default App;
