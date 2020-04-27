import React from 'react';
import PropTypes from 'prop-types';
import TodayItem from './TodayItem';

export default function Today(props) {
	const compareTime = (aniA, aniB) => {
		const dateA = new Date(aniA.airing_start);
		const dateB = new Date(aniB.airing_start);
		dateA.setMonth(0); dateA.setDate(1);
		dateB.setMonth(0); dateB.setDate(1);
		return ( dateA - dateB )
	}

	let schedule = props.schedule
	schedule.sort(compareTime)
	const day = props.day.slice(0,1).toUpperCase() + props.day.slice(1)
	return (
		<div style={todayStyle}>
			<p style={{marginBottom: '10px'}}>{day}</p>

			{props.schedule.map((anime,i) => (
				<TodayItem anime={anime}
									 key={anime.mal_id}/>
			))}
		</div>
	)
}

const todayStyle = {
	padding: '10px',
	margin: '5px',
	minWidth: '200px',
	flex: '1',
	border: 'solid 1px #EEE',
	borderRadius: '10px'
}

Today.propTypes = {
	day: PropTypes.string.isRequired,
	schedule: PropTypes.array.isRequired
}