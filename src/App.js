import React from "react";
import "./App.css";

import requestMembers from "./utils/requestMembers";
import HomePage from "./views/homePage/homePage";
import GamePage from "./views/gamePage/gamePage";

const App = () => {
  const [page, setPage] = React.useState("home");

  const Team = async () => {
    const data = await requestMembers("FAC-17", "students");
    console.log("Data in component", data);
  };

  Team();
  return (
    <div className="App">
      <header className="App-header">Name the Face Game</header>
      {page === "home" ? <HomePage /> : <GamePage />}
    </div>
  );
};

export default App;
