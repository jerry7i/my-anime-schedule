import React, { Component } from "react";
import Today from "./Today";
import PropTypes from "prop-types";
import { tokyoToLocalTime, startToLocalTime } from "./tokyoToLocalTime";

import "./Schedule.css";

import { Link } from "react-scroll";

const emptySchedule = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
};

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

class Schedule extends Component {
  state = {
    mySchedule: emptySchedule,
    watchlist: [],
  };

  componentDidMount = async () => {
    // await this.loadSchedule();
    this.getSchedule();
  };

  getSchedule = async () => {
    await this.props.setWatchlist();

    const watchlist = this.props.watching.slice();

    if (watchlist.length === 0) {
      this.setState({
        mySchedule: emptySchedule,
        watchlist: [],
      });
    }

    let schedule = {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    };

    // add each anime to schedule based on local time
    watchlist.forEach((anime) => {
      let day = anime.broadcast.day;
      let time = anime.broadcast.time;
      let localTime;
      if (day === null || time === null) {
        localTime = startToLocalTime(anime.aired.from);
      } else {
        localTime = tokyoToLocalTime(anime.broadcast.day, anime.broadcast.time);
      }

      const dayOfWeek = localTime.toFormat("cccc").toLowerCase();
      anime.localTime = localTime;
      schedule[dayOfWeek].push(anime);
    });

    this.setState({
      mySchedule: schedule,
      watchlist: watchlist,
    });
  };

  render() {
    const schedule = this.state.mySchedule;
    return (
      <>
        <Link to="schedule" smooth={true} offset={-90} duration={600}>
          <button className="get-btn" onClick={() => this.getSchedule()}>
            Get Schedule
          </button>
        </Link>

        <p style={tipStyle}>* times are displayed in your local time zone</p>
        <div style={scheduleStyle} name="schedule">
          {days.map((day) => (
            <Today day={day} schedule={schedule[day]} key={day} />
          ))}
        </div>
      </>
    );
  }
}

const scheduleStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  flexWrap: "wrap",
  color: "#EEE",
};

const tipStyle = {
  textAlign: "left",
  paddingLeft: "10px",
  color: "#EEE",
  marginTop: "40px",
};

Schedule.propTypes = {
  watching: PropTypes.array.isRequired,
  setWatchlist: PropTypes.func.isRequired,
};

export default Schedule;
