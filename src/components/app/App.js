import React from "react";
import NavPannel from "../navPannel/navPannel";
import Reasons from "../reasons/reasons";
import Possibilities from "../possibilities/possibilities";
import Conditions from "../conditions/conditions";
import World from "../worldSec/world";

const App = () => {
  return (
    <div className="app">
      <main>
        <NavPannel />
        <Reasons />
        <Possibilities />
        <Conditions />
        <World />
      </main>
    </div>
  );
}

export default App;
