import React, { Component } from 'react';
import Anime from './Anime';
import PropTypes from 'prop-types';

class AniCards extends Component {

	render() {
		const animes = this.props.animes;
		return (
			<div style={aniCardsStyle}>
				{animes.map(
					(anime) => (
						<Anime anime={ anime } 
									 addAnime={ this.props.addAnime }
									 delAnime={ this.props.delAnime }
									 key={ anime.mal_id }
						/>
					)
				)}
			</div>
		);
	}
}

const aniCardsStyle = {
	margin: '0',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
}

AniCards.propTypes = {
	animes: PropTypes.array.isRequired,
	addAnime: PropTypes.func.isRequired,
	delAnime: PropTypes.func.isRequired,
}

export { aniCardsStyle };
export default AniCards;