import React, { Component } from "react";
import "./Hand.css";
import PlayingCard from "./PlayingCard/PlayingCard";

class PlayingHand extends Component {
  constructor(props) {
    super(props);
  }

  resetSpread(handLength) {
    this.initialOver = 110 * (handLength - 1);
    this.over = this.initialOver / 2;
  }

  spreadStyle(num, handLength) {
    if (num > 0) {
      this.over -= this.initialOver / (handLength - 1);
    }
    return {
      zIndex: num,
      transform: `translateX(${-50 + this.over * -1}%)`
    };
  }

  render() {
    let index = 0;

    const handLength = this.props.cards.length;
    this.resetSpread(handLength);

    return (
      <div className={"Hand"} style={{ height: 200 }}>
        {this.props.cards.map(card => {
          const { rank, suit, hidden } = card;

          const cardRep = `${rank.toLowerCase().replace("a", "1")}${suit
            .substr(0, 1)
            .toLowerCase()}`;

          return (
            <PlayingCard
              ref={cardRep}
              height={125}
              card={cardRep}
              style={this.spreadStyle(index++, handLength)}
              flipped={hidden}
            />
          );
        })}
      </div>
    );
  }
}
export default PlayingHand;
