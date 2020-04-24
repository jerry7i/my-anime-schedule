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
		const { title, mal_id } = this.props.anime;
		const isSelected = this.state.isSelected;
		return (
			<div className='card' 
					 style={ isSelected ? selected : {} }
					 onClick={ () => this.toggleSelected(mal_id) }
			>
				{ title }
			</div>
		);
	}
}

const selected = {
	filter: 'brightness(1.1)'
}

Anime.propTypes = {
	anime: PropTypes.object.isRequired,
	addAnime: PropTypes.func.isRequired,
	delAnime: PropTypes.func.isRequired,
}

export default Anime;