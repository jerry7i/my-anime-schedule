import React from 'react';
import './TodayItem.css';
import PropTypes from 'prop-types';

export default function TodayItem(props) {
	const airing = props.anime.airing_start
	const date = new Date(airing)
	let hour = date.getHours()
	let min = date.getMinutes()
	const ampm = (hour < 12) ? 'AM' : 'PM'
	hour = (hour <= 12) ? hour : hour % 12;
	min = (min < 10) ? '0'+min : min

	const airTime = hour + ':' + min + ' ' + ampm
	return (
		<div className="today-item">
			<p style={timeStyle}>{airTime}</p>

			<img src={props.anime.image_url}
			     alt={props.anime.title}
					 style={imgStyle}/>

			<div style={infoStyle}>
				{props.anime.title.slice(0,20)}
			</div>
		</div>
	)
}

const imgStyle = {
	float: 'left',
	width: '50px',
	height: '50px',
	marginRight: '10px',
	objectFit: 'cover',
	borderRadius: '30%',
}
const timeStyle = {
	textAlign: 'left',
	marginBottom: '5px',
}
const infoStyle = {
	margin: '0',
	textAlign: 'left',
}

TodayItem.propTypes = {
	anime: PropTypes.object.isRequired,
}
