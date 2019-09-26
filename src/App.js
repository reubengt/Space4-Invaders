import React from "react";
import logo from "./logo.svg";
import "./App.css";

import requestMembers from "./utils/requestMembers";
const App = () => {
  const Team = async () => {
    const data = await requestMembers("FAC-17", "students");
    console.log("Data in component", data);
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
