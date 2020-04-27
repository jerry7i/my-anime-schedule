import React, { Component } from 'react';
import './App.css';
import AniCards from './components/AniCards';
import Schedule from './components/Schedule';

import jikanjs from 'jikanjs';

class App extends Component {
  state = {
    seasonal: [],
    watching: [],
    renderWatchlist: [],
  }

  componentDidMount() {
    this.loadSeason()
  }

  loadSeason = async() => {
    try {
      const res = await jikanjs.loadSeason(2020, 'winter');
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

  setWatchlist = () => {
    this.setState({
      renderWatchlist: this.state.watching
    })
  }

  render() {
    const watchlist = this.state.renderWatchlist

    return (
      <div className='container'>
        <AniCards
          animes={ this.state.seasonal } 
          addAnime={ this.addAnime }
          delAnime={ this.delAnime }
          />
        <br/>
        
        <Schedule watching={watchlist} 
                  setWatchlist={this.setWatchlist}
                  />
      </div>
    )
  }
}

export default App;
