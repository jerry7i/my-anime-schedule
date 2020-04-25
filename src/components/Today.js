import React from 'react';
import PropTypes from 'prop-types';
import Showtime from './Showtime';

export default function Today(props) {
	const sortedByTime = (schedule) => {
		console.log('sort')
	}

	return (
		<div style={todayStyle}>
			{props.day}
			{props.schedule.map((anime,i) => (
				<Showtime anime={anime}
									key={anime.mal_id}/>
			))}
		</div>
	)
}

const todayStyle = {
	padding: '10px',
	margin: '5px',
	width: '160px',
	border: 'solid 1px white'
}

Today.propTypes = {
	day: PropTypes.string.isRequired,
	schedule: PropTypes.array.isRequired
}