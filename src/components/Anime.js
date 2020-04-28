import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Anime.css';

class Anime extends Component {
	state = {
		isSelected: this.props.selectedCards.includes(
									this.props.anime.mal_id
								)
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
		const { title, mal_id, image_url, url } = this.props.anime;
		const isSelected = this.state.isSelected;

		return (
			<div className='card' 
					 style={ isSelected ? selectedStyle : {} }
					  
			>
				<img src={image_url} 
						 alt={title}
						 style={imgStyle} 
						 onClick={ () => this.toggleSelected(mal_id)}
						 />
				<a href={url} target="_blank" rel="noopener noreferrer" >
					<p className='title'>{title}</p>
				</a>
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

const selectedStyle = {
	filter: 'brightness(1.3)',
	color: '#ccc',
	transform: 'translateY(-8px)',
	backgroundColor : 'green'
}

Anime.propTypes = {
	anime: PropTypes.object.isRequired,
	selectedCards: PropTypes.array.isRequired,
	addAnime: PropTypes.func.isRequired,
	delAnime: PropTypes.func.isRequired,
}

export default Anime;