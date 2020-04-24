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
    showSchedule: false
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

  showSchedule = () => {
    this.setState({
      renderWatchlist: this.state.watching,
      showSchedule: true
    })
  }

  render() {
    const watchlist = this.state.renderWatchlist
    let schedule = <></>
    if ( this.state.showSchedule ) {
      schedule = <Schedule watching={watchlist} />
    }

    return (
      <div className='container'>
        <AniCards
          animes={ this.state.seasonal } 
          addAnime={ this.addAnime }
          delAnime={ this.delAnime }
          />
        <br/>
        <button className="btn" 
                onClick={this.showSchedule}>
          Get Schedule
        </button>
        {schedule}
      </div>
    )
  }
}

export default App;
