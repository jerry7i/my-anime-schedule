import React from 'react';
import PropTypes from 'prop-types';
import TodayItem from './TodayItem';

const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

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
	// get date of current day
	const curr = new Date()
	const today = curr.getDate() - curr.getDay() + days.indexOf(props.day);
	const todayDate = new Date(curr.setDate(today))

	const todayDateStr = `${months[todayDate.getMonth()]} ${todayDate.getDate()}`;

	return (
		<div style={todayStyle}>
			<div style={{marginBottom: '10px'}}>
				<p>{day}</p>
				<p>{todayDateStr}</p>
			</div>

			{schedule.length === 0 ?
				<p style={emptyStyle}>Slow day...</p> :

				props.schedule.map((anime,i) => (
					<TodayItem anime={anime}
											key={anime.mal_id}/>
				))}
			
		</div>
	)
}

const emptyStyle = {
	borderTop: 'solid 1.2px #444',
	paddingTop: '10px'
}

const todayStyle = {
	padding: '10px 10px 4px 10px',
	margin: '5px',
	minWidth: '200px',
	height: 'inherit',
	flex: '1',
	backgroundColor: '#222',
	//border: 'solid 1px #EEE',
	borderRadius: '10px'
}

Today.propTypes = {
	day: PropTypes.string.isRequired,
	schedule: PropTypes.array.isRequired
}