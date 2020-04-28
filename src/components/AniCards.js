import React from 'react';
import Anime from './Anime';
import PropTypes from 'prop-types';
import './AniCards.css';

function AniCards(props) {
	const animes = props.animes;
	return (
		<>
			<div style={aniCardsStyle}>
				{animes.map(
					(anime) => (
						<Anime anime={ anime } 
										addAnime={ props.addAnime }
										delAnime={ props.delAnime }
										key={ anime.mal_id }
						/>
					)
				)}
			</div>
			<button className="show-btn"
								onClick={() => props.showMore(true)}>
					show more
			</button>
			<button className="show-btn"
								onClick={() => props.showMore(false)}>
					show less
			</button>
		</>
	);
}

const aniCardsStyle = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
}

AniCards.propTypes = {
	animes: PropTypes.array.isRequired,
	addAnime: PropTypes.func.isRequired,
	delAnime: PropTypes.func.isRequired,
	showMore: PropTypes.func.isRequired,
}

export default AniCards;