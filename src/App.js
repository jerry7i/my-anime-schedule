import React, { Component } from 'react';
import './App.css';
import { instanceOf } from 'prop-types';
import Header from './components/Header';
import AniCards from './components/AniCards';
import Schedule from './components/Schedule';

import jikanjs from 'jikanjs';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
 
    const { cookies } = props;
    const displayedCookie = cookies.get('numDisplayed')
    const displayed = displayedCookie == null ? 20 : parseInt(displayedCookie)
    this.state = {
      watching: cookies.get('watching') || [],
      seasonal: [],
      renderWatchlist: cookies.get('watching') || [],
      numDisplayed: displayed,
    };
  }

  componentDidMount = async() => {
    await this.loadSeason();
    this.filterOngoing();
  }

  filterOngoing() {
    const { watching, seasonal } = this.state;
    const seasonalIDs = seasonal.map((anime) => (anime.mal_id));
    
    const filtered = watching.filter((id) => (seasonalIDs.includes(id)));
    this.watchingCookie(filtered);
    this.setState({
      watching: filtered
    })
  }

  watchingCookie(watching) {
    const { cookies } = this.props;
    
    const yearLater = new Date();
    yearLater.setFullYear(yearLater.getFullYear() + 1);

    cookies.set( 'watching', watching, { expires: yearLater });
    this.setState({ watching });
  }
  numDisplayedCookie(numDisplayed) {
    const { cookies } = this.props;

    const yearLater = new Date();
    yearLater.setFullYear(yearLater.getFullYear() + 1);

    cookies.set( 'numDisplayed', numDisplayed, { expires: yearLater });
    this.setState({ numDisplayed })
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
    this.watchingCookie(this.state.watching.concat(id))
  }

  delAnime = (id) => {
    const watching = this.state.watching.filter((itemID) => (
      itemID !== id
    ))
    this.setState({
      watching: watching
    })
    this.watchingCookie(watching);
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
        this.numDisplayedCookie(numDisplayed + 10)
        
        this.setState({
          numDisplayed: numDisplayed + 10
        })
      }
    } else {
      if ( numDisplayed > 0 ) {
        this.numDisplayedCookie(numDisplayed - 10)
        
        this.setState({
          numDisplayed: numDisplayed - 10
        })
      }
    }
  }

  render() {
    const { renderWatchlist, watching } = this.state;
    const animes = this.state.seasonal.slice(0, this.state.numDisplayed);
    return (
      <div className='container'>
        <Header/>

        <AniCards
          animes={ animes } 
          selectedCards={ watching }
          addAnime={ this.addAnime }
          delAnime={ this.delAnime }
          showMore={ this.showMore }
          />
        <br/><br/>
        <Schedule watching={renderWatchlist} 
                  setWatchlist={this.setWatchlist}
                  />
      </div>
    )
  }
}

export default withCookies(App);
