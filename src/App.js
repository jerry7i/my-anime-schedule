import React, { Component } from 'react';
import './App.css';
import AniCards, { aniCardsStyle } from './components/AniCards';

import jikanjs from 'jikanjs';

class App extends Component {
  state = {
    seasonal: [],
    watching: []
  }

  componentDidMount() {
    this.loadSeason()
  }

  loadSeason = async() => {
    try {
      const res = await jikanjs.loadSeason(2020, 'spring');
      this.setState({
        seasonal: res.anime.slice(0,20)
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  addAnime = (id) => {
    this.setState({
      watching: this.state.watching.concat(id)
    })
  }

  delAnime = (id) => {
    const watching = this.state.watching.filter((itemID) => (
      itemID !== id
    ))
    this.setState({
      watching: watching
    })
  }

  render() {
    return (
      <AniCards 
        style={ aniCardsStyle } 
        animes={ this.state.seasonal } 
        addAnime={ this.addAnime }
        delAnime={ this.delAnime }
      />
    )
  }
}

export default App;
