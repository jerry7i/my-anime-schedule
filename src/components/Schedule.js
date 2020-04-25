import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jikanjs from 'jikanjs';

const emptySchedule = {
	sunday: [],
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
	saturday: []
}

class Schedule extends Component {
	state = {
		fullSchedule: {},
		mySchedule: emptySchedule,
		watchlist: []
	}

	componentDidMount() {
		this.loadSchedule()
	}

	loadSchedule = async() => {
		try {
			let schedule = await jikanjs.loadSchedule()

			this.setState({
				fullSchedule: schedule
			})
		} 
		catch(err) {
			console.log(err)
		}
	}
	
	getSchedule = async() => {
		await this.props.setWatchlist();
		
		try {
			const watchlist = this.props.watching.slice();
			const prevWatchlist = this.state.watchlist.slice();
			watchlist.sort();
			prevWatchlist.sort();

			if (watchlist.length === 0) {
				this.setState({
					mySchedule: emptySchedule,
					watchlist: []
				})
			}
			// Check if user selects something different
			else if (JSON.stringify(watchlist) !== JSON.stringify(prevWatchlist)) {
				console.log('Changing schedule...')
				const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
				
				//TODO: filter the fullSchedule for a personalized one
				let schedule = {
					sunday: [],
					monday: [],
					tuesday: [],
					wednesday: [],
					thursday: [],
					friday: [],
					saturday: []
				};
				
				days.forEach((day) => {
					const airing = this.state.fullSchedule[day];
					console.log(`${day}: `,airing.filter((anime) => (
						watchlist.includes(anime.mal_id)
					)));
					const airingToday = airing.filter((anime) => (
						watchlist.includes(anime.mal_id)
					))

					schedule[day].push(...airingToday);
				})
				console.log(schedule)

				this.setState({
					mySchedule: schedule,
					watchlist: watchlist
				})
			}
		}
		catch (err) {
			console.error(err)
		}
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