import React from "react";
import "./App.css";

import HomePage from "./views/homePage/homePage";
import GamePage from "./views/gamePage/gamePage";

const App = () => {
  const [page, setPage] = React.useState("home");
  const [profiles, setProfiles] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">Name the Face Game</header>
      {page === "home" ? (
        <HomePage
          setPage={setPage}
          profiles={profiles}
          setProfiles={setProfiles}
        />
      ) : page === "game" ? (
        <GamePage profiles={profiles} />
      ) : (
        <p>ERROR!!!</p>
      )}
    </div>
  );
};

export default App;
