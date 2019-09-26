import React from "react";
import "./App.css";

import requestMembers from "./utils/requestMembers";
import HomePage from "./views/homePage/homePage";
const App = () => {
  const Team = async () => {
    const data = await requestMembers("FAC-17", "students");
    console.log("Data in component", data);
  };
  Team();
  return (
    <div className="App">
      <header className="App-header">Name the Face Game</header>
      <HomePage />
    </div>
  );
};

export default App;
