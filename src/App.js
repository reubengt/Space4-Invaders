import React from "react";
import "./App.css";
import HomePage from "./views/homePage/homePage";
import teamRequest from "./utils/request";

const App = () => {
  // const Team = async () => {
  //   const teamData = await teamRequest("FAC-17", "students");
  //   const teamId = teamData.team_id;
  //   console.log(teamData);
  //   return <div>abcd</div>;
  // };

  // Team();

  return (
    <div className="App">
      <header className="App-header">Name the Face Game</header>
      <HomePage />
    </div>
  );
};

export default App;
