import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

import Wallet from "./account/Wallet";
import Bet from "./account/Bet";
import PlayerHandContainer from "../containers/PlayerHandContainer";
import CommandsContainer from "../containers/CommandsContainer";
import DealerHandContainer from "../containers/DealerHandContainer";

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
    <DealerHandContainer />
    <br />
    <PlayerHandContainer />
    <br />
    <Wallet value={1000} />
    <br />
    <Bet value={100} />
    <br />
    <CommandsContainer />
  </div>
);

export default App;
