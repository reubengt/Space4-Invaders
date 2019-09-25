import React from "react";
import logo from "./logo.svg";
import "./App.css";

import teamRequest from "./utils/request";
const App = () => {
  const Team = async () => {
    const teamData = await teamRequest("FAC-17", "students");
    const teamId = teamData.team_id;
    console.log(teamData);
    return <div>abcd</div>;
  };
  Team();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
