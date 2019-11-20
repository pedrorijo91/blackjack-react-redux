import React from "react";

import WalletContainer from "../containers/WalletContainer";
import BetContainer from "../containers/BetContainer";
import PlayerHandContainer from "../containers/PlayerHandContainer";
import CommandsContainer from "../containers/CommandsContainer";
import DealerHandContainer from "../containers/DealerHandContainer";
import InfoContainer from "../containers/InfoContainer";
import Footer from "./Footer";

const App = () => (
  <>
  <div>
    <InfoContainer />
    <br />
    <DealerHandContainer />
    <br />
    <PlayerHandContainer />
    <br />
    <WalletContainer /> {" && "} <BetContainer />
    <br />
    <CommandsContainer />
    <br />
    <Footer />
  </div>
  </>
);

export default App;
