import React, { Component } from "react";
import "./PlayingCard.css";
import PlayingCardsList from "./PlayingCardsList";

class PlayingCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const flipped = this.props.flipped || this.props.card === "hide";

    return (
      <div>
        <img
          ref={this.props.card}
          style={this.props.style}
          height={this.props.height}
          className="Playing-card"
          src={
            flipped
              ? PlayingCardsList.flipped
              : PlayingCardsList[this.props.card]
          }
          alt={flipped ? "Hidden Card" : PlayingCardsList[this.props.card]}
        />
      </div>
    );
  }
}

export default PlayingCard;
