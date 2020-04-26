import React from 'react';
import './TodayItem.css';
import PropTypes from 'prop-types';

export default function TodayItem(props) {
	const airing = props.anime.airing_start
	const date = new Date(airing)
	console.log(date.getDay())
	return (
		<div className="today-item">
			<p style={timeStyle}>{props.anime.airing_start.slice(11)}</p>

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
