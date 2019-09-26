import React from "react";
import "./App.css";

import HomePage from "./views/homePage/homePage";
import GamePage from "./views/gamePage/gamePage";

const App = () => {
  const [page, setPage] = React.useState("home");

  return (
    <div className="App">
      <header className="App-header">Name the Face Game</header>
      {page === "home" ? <HomePage /> : <GamePage />}
    </div>
  );
};

export default App;
