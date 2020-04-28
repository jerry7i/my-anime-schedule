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
    numDisplayed: 20
  }

  componentDidMount() {
    this.loadSeason()
  }

  loadSeason = async() => {
    try {
      const res = await jikanjs.loadSeason();
      this.setState({
        seasonal: res.anime
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

  showMore = (more) => {
    const { seasonal, numDisplayed } = this.state

    if (more) {
      if ( numDisplayed < seasonal.length ) {
        this.setState({
          numDisplayed: this.state.numDisplayed + 10
        })
      }
    } else {
      if ( numDisplayed > 0 ) {
        this.setState({
          numDisplayed: this.state.numDisplayed - 10
        })
      }
    }
  }

  render() {
    const watchlist = this.state.renderWatchlist
    const animes = this.state.seasonal.slice(0, this.state.numDisplayed)
    return (
      <div className='container'>
        <h1 className='header'>MyAnimeSchedule</h1>
        <AniCards
          animes={ animes } 
          addAnime={ this.addAnime }
          delAnime={ this.delAnime }
          showMore={ this.showMore }
          />
        <br/><br/>
        
        <Schedule watching={watchlist} 
                  setWatchlist={this.setWatchlist}
                  />
      </div>
    )
  }
}

export default App;
