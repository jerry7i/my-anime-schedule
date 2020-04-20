import React, { Component } from 'react';
import Anime from './Anime';
import PropTypes from 'prop-types';

class AniCards extends Component {

	render() {
		const animes = this.props.animes;
		return (
			<div style={aniCardsStyle}>
				{animes.map(
					(anime) => (<Anime anime={anime}/>)
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
	margin: '20px'
}

AniCards.propTypes = {
	animes: PropTypes.array.isRequired,
}

export { aniCardsStyle };
export default AniCards;