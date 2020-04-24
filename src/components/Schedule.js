import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jikanjs from 'jikanjs';

class Schedule extends Component {
	state = {
		fullSchedule: [],
		mySchedule: [],
	}

	componentDidMount() {
		this.loadSchedule()
	}

	loadSchedule = async() => {
		try {
			const schedule = await jikanjs.loadSchedule()
			console.log(schedule)
			this.setState({
				fullSchedule: schedule
			})
		} 
		catch(err) {
			console.log(err)
		}
	}
	
	getSchedule = async() => {
		console.log('getSchedule')
		await this.props.setWatchlist()

		//TODO: filter the fullSchedule for a personalized one

		this.setState({
			showSchedule: true,
			mySchedule: this.props.watching
		})
	}

	render() {
		const schedule = this.state.mySchedule
		return (
			<>
				<button className="btn" 
								onClick={() => this.getSchedule()}>
						Get Schedule
				</button>
				{(schedule.length > 0) &&
				<div style={scheduleStyle}>{this.state.mySchedule}</div>
				}
			</>
		)
	}
}

const scheduleStyle = {
	margin: '50px',
	color: '#EEE'
}

Schedule.propTypes = {
	watching: PropTypes.array.isRequired,
	setWatchlist: PropTypes.func.isRequired
}

export default Schedule;