import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Schedule extends Component {
	render() {
		console.log(this.props.watching)
		return (
			<div>Hello</div>
		)
	}
}

Schedule.propTypes = {
	watching: PropTypes.array.isRequired,
}

export default Schedule;