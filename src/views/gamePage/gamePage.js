import React from "react";
import "./gamePage.css";

const GamePage = ({ profiles }) => {
  return (
    <>
      <div>
        <h1>GAME GAME GAME</h1>
        <p>{profiles[0].name}</p>
      </div>
    </>
  );
};

export default GamePage;
