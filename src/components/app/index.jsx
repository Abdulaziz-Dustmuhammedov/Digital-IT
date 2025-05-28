// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";

import "./index.css";

import Header from "../header";
import About from "../about";
import Advantages from "../advantages";
import Direction from "../direction";
import School from "../school";
import DirectionTablet from "../direction-tablet";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <About />
      <Advantages />
      {/* <Direction /> */}
      <DirectionTablet />
      {/* <School /> */}
    </div>
  );
}

export default App;
