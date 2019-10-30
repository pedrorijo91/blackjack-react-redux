import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

import DealerHand from "./cards/DealerHand";
import PlayerHand from "./cards/PlayerHand";
import Wallet from "./account/Wallet";
import Bet from "./account/Bet";
import Commands from "./commands/Commands";
import { CARD_SUITS } from "../components/cards/Card";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <br />
    <br />
    <br />
    <br />
    ===========================
    <br />
    <br />
    <br />
    <br />
    <DealerHand
      cards={[
        { suit: CARD_SUITS.DIAMONDS, rank: "A" },
        { suit: CARD_SUITS.HEARTS, rank: "2" }
      ]}
    />
    <br />
    <PlayerHand
      cards={[
        { suit: CARD_SUITS.SPADES, rank: "10" },
        { suit: CARD_SUITS.CLUBS, rank: "Jack" }
      ]}
    />
    <br />
    <Wallet value={1000} />
    <br />
    <Bet value={100} />
    <br />
    <Commands />
  </div>
);

export default App;
