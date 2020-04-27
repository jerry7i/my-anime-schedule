import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Anime.css';

class Anime extends Component {
	state = {
		isSelected: false
	}

	toggleSelected(id) {
		if ( this.state.isSelected ) {
			this.props.delAnime(id)
		} else {
			this.props.addAnime(id)
		}
		this.setState({
			isSelected: !this.state.isSelected
		})
	}

	render() {
		const { title, mal_id, image_url } = this.props.anime;
		const isSelected = this.state.isSelected;
		return (
			<div className='card' 
					 style={ isSelected ? selectedStyle : {} }
					 onClick={ () => this.toggleSelected(mal_id) }
			>
				<div >
					<img src={image_url} alt={title} style={imgStyle}/>
				</div>
				<p style={titleStyle}>{title.slice(0,20)}</p>
			</div>
		);
	}
}

const imgStyle = {
	height: '190px',
	width: '100%',
	objectFit: 'cover',
	borderRadius: '6px 6px 0 0',
	margin: '0'
}
const titleStyle = {
	padding: '0px 10px'
}
const selectedStyle = {
	filter: 'brightness(1.3)',
	color: '#ccc',
	transform: 'translateY(-8px)',
	backgroundColor : 'green'
}

Anime.propTypes = {
	anime: PropTypes.object.isRequired,
	addAnime: PropTypes.func.isRequired,
	delAnime: PropTypes.func.isRequired,
}

export default Anime;