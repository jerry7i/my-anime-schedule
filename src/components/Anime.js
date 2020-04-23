import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
		return (
			<div onClick={ () => this.toggleSelected(this.props.anime.mal_id) }
					 style={ cardStyle } >
				{ title }
			</div>
		);
	}
}

const cardStyle = {
	//flex: '1',
	width: '8em',
	background: '#f4f4f4',
	padding: '10px',
	margin: '10px',
}

Anime.propTypes = {
	anime: PropTypes.object.isRequired,
}

export default Anime;