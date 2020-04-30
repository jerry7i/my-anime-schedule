import React, { Component } from 'react';
import Today from './Today';
import PropTypes from 'prop-types';
import './Schedule.css';

import jikanjs from 'jikanjs';
import { Link } from 'react-scroll';

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

	componentDidMount = async() => {
		await this.loadSchedule()
		this.getSchedule()
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
			//filter the fullSchedule for a personalized one
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
				
				const airingSelected = airing.filter((anime) => (
					watchlist.includes(anime.mal_id)
				));
				// add each anime to schedule based on local time
				airingSelected.forEach((anime) => {
					const localTime = new Date(anime.airing_start);
					const dayOfWeek = days[localTime.getDay()] //sun-sat

					schedule[dayOfWeek].push(anime);
				})
			})

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
				<Link
            to='schedule'
            smooth={true}
            offset={-90}
						duration= {600}
						>      
					<button className="get-btn" 
									onClick={() => this.getSchedule()}>
						Get Schedule
					</button>
				</Link>
				
				<p style={tipStyle}>
					* times are displayed in your local time zone
				</p>
				<div style={scheduleStyle} name='schedule'>
					{days.map((day) => (
						<Today day={day}
									 schedule={schedule[day]}
									 key={day}
									 />
					))}
				</div>
			</>
		)
	}
}

const scheduleStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'flex-start',
	flexWrap: 'wrap',
	color: '#EEE'
}

const tipStyle = {
	textAlign: 'left',
	paddingLeft: '10px',
	color: '#EEE',
	marginTop: '40px'
}

Schedule.propTypes = {
	watching: PropTypes.array.isRequired,
	setWatchlist: PropTypes.func.isRequired
}

export default Schedule;