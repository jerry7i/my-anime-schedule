import React from 'react';
import './TodayItem.css';
import PropTypes from 'prop-types';

export default function TodayItem(props) {
	const date = new Date(props.anime.airing_start);
	let hour = date.getHours(); 
	let min = date.getMinutes();
	const ampm = (hour < 12) ? 'AM' : 'PM';
	hour = (hour <= 12) ? hour : hour % 12;
	min = (min < 10) ? '0'+min : min;

	const airTime = hour + ':' + min + ' ' + ampm;
	const { image_url, title, url } = props.anime;
	return (
		<div className="today-item">
			<p style={timeStyle}>{airTime}</p>
			<a href={url} target="_blank" rel="noopener noreferrer">
			<img src={image_url}
			     alt={title}
					 style={imgStyle}/>
			
			
				<div className='item-title'>
					{title}
				</div>
			</a>
		</div>
	)
}

const imgStyle = {
	float: 'left',
	width: '60px',
	height: '60px',
	marginRight: '10px',
	objectFit: 'cover',
	borderRadius: '6px',
}
const timeStyle = {
	textAlign: 'left',
	marginBottom: '5px',
}

TodayItem.propTypes = {
	anime: PropTypes.object.isRequired,
}
