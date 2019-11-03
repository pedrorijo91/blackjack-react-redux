import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

import WalletContainer from "../containers/WalletContainer";
import BetContainer from "../containers/BetContainer";
import PlayerHandContainer from "../containers/PlayerHandContainer";
import CommandsContainer from "../containers/CommandsContainer";
import DealerHandContainer from "../containers/DealerHandContainer";
import InfoContainer from "../containers/InfoContainer";

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
    <InfoContainer />
    <br />
    <DealerHandContainer />
    <br />
    <PlayerHandContainer />
    <br />
    <WalletContainer/>
    <br />
    <BetContainer />
    <br />
    <CommandsContainer />
  </div>
);

export default App;
