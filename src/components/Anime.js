import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Anime extends Component {

	render() {
		//{ mal_id, title } = props.anime;
		//title = props.anime.title;
		//mal_id = props.anime.mal_id;
		const { title, mal_id } = this.props.anime;
		console.log(this.props.anime);
		return (
			<div style={cardStyle}>Title: {title}, ID: {mal_id}</div>
		);
	}
}

const cardStyle = {
	flex: '1',
	maxWidth: '10em',
	background: '#f4f4f4',
	padding: '10px',
	margin: '10px',
}

Anime.propTypes = {
	anime: PropTypes.object.isRequired,
}

export default Anime;