import React from "react";
import "./TodayItem.css";
import PropTypes from "prop-types";

export default function TodayItem(props) {
  const airTime = props.anime.localTime.toFormat("h:mm a"); // e.g., "Thursday, 11:26 AM"

  const { images, title_english, title, url } = props.anime;
  return (
    <div className="today-item">
      <p style={timeStyle}>{airTime}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={images.jpg.image_url}
          alt={title_english === null ? title : title_english}
          style={imgStyle}
        />

        <div className="item-title">
          {title_english === null ? title : title_english}
        </div>
      </a>
    </div>
  );
}

const imgStyle = {
  float: "left",
  width: "60px",
  height: "60px",
  marginRight: "10px",
  objectFit: "cover",
  borderRadius: "6px",
};
const timeStyle = {
  textAlign: "left",
  marginBottom: "5px",
};

TodayItem.propTypes = {
  anime: PropTypes.object.isRequired,
};
