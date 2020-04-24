import React from "react";
import logo from "../../assets/icons/travel.png";
import "./App.css";
import Routes from "../../routes/Routes";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Routes />
  </div>
);

export default App;
