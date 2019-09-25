import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/homePage/homePage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Name the Face Game</header>
      <HomePage />
    </div>
  );
};

export default App;
