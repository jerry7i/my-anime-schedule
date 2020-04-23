import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Anime extends Component {
	state = {
		isSelected: false
	}

	toggleSelected(title) {
		if ( this.state.isSelected ) {
			this.props.delAnime(title)
		} else {
			this.props.addAnime(title)
		}
		this.setState({
			isSelected: !this.state.isSelected
		})
	}

	render() {
		const { title, mal_id } = this.props.anime;
		return (
			<div onClick={ () => this.toggleSelected(title) }
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