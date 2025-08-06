import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Anime.css";
import plus_icon from "../images/plus_icon.png";

class Anime extends Component {
  state = {
    isSelected: this.props.selectedCards.includes(this.props.anime.mal_id),
  };

  toggleSelected(id) {
    const { delAnime, addAnime } = this.props;
    this.state.isSelected ? delAnime(id) : addAnime(id);

    this.setState({
      isSelected: !this.state.isSelected,
    });
  }

  render() {
    const { title_english, title, mal_id, images, url } = this.props.anime;
    const isSelected = this.state.isSelected;

    return (
      <div className="card" style={isSelected ? selectedStyle : {}}>
        <div
          onClick={() => this.toggleSelected(mal_id)}
          className={isSelected ? "image-selected" : "image-container"}
        >
          <img
            src={images.jpg.image_url}
            alt={title_english === null ? title : title_english}
            style={imgStyle}
          />
          <img src={plus_icon} alt={"Add Anime"} className="plus-icon" />
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="title">
            {title_english === null ? title : title_english}
          </p>
        </a>
      </div>
    );
  }
}

const imgStyle = {
  display: "relative",
  height: "190px",
  width: "100%",
  objectFit: "cover",
  borderRadius: "6px 6px 0 0",
  margin: "0",
};

const selectedStyle = {
  filter: "brightness(1.2)",
  color: "#ccc",
  transform: "translateY(-8px)",
  backgroundColor: "green",
};

Anime.propTypes = {
  anime: PropTypes.object.isRequired,
  selectedCards: PropTypes.array.isRequired,
  addAnime: PropTypes.func.isRequired,
  delAnime: PropTypes.func.isRequired,
};

export default Anime;
