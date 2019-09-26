import React from "react";

const InitiateGame = ({ profiles, startGame }) => {
  const notFound = <p>not Found</p>;
  const searchForTeam = <p>Search for a team</p>;
  const loading = <p> Loading </p>;
  const loadGame = Array.isArray(profiles) ? (
    <div className="game-to-play">
      <h2>Team Found with {profiles.length} members</h2>
      <button className="start-button" onClick={startGame}>
        Start Game
      </button>
    </div>
  ) : (
    <p> error </p>
  );

  return (
    <>
      {profiles === ""
        ? searchForTeam
        : profiles === "error"
        ? notFound
        : profiles === "loading"
        ? loading
        : loadGame}
    </>
  );
};

export default InitiateGame;
