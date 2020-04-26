import React, { Component } from 'react';
import Today from './Today';
import PropTypes from 'prop-types';
import jikanjs from 'jikanjs';
import './Schedule.css';

const emptySchedule = {
	sunday: [],
	monday: [],
	tuesday: [],
	wednesday: [],
	thursday: [],
	friday: [],
	saturday: []
}

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

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
			console.log('Changing schedule...');
			
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
				
				const airingToday = airing.filter((anime) => (
					watchlist.includes(anime.mal_id)
				));
				console.log(`${day}: `,airingToday);
				// add each anime to schedule based on local time
				airingToday.forEach((anime) => {
					const localTime = new Date(anime.airing_start);
					const dayOfWeek = days[localTime.getDay()] //sun-sat

					schedule[dayOfWeek].push(anime);
				})
			})
			console.log(schedule)

			this.setState({
				mySchedule: schedule,
				watchlist: watchlist
			})
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

				{(this.state.watchlist.length > 0) &&
				<div style={scheduleStyle}>
					{days.map((day) => (
						<Today day={day}
									 schedule={schedule[day]}
									 key={day}
									 />
					))}
				</div>
				}
			</>
		)
	}
}

const scheduleStyle = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	margin: '50px 0px',
	color: '#EEE'
}

Schedule.propTypes = {
	watching: PropTypes.array.isRequired,
	setWatchlist: PropTypes.func.isRequired
}

export default Schedule;