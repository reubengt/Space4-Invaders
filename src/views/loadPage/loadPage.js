import React from "react";
import "./loadPage.css";
import generateGameArrays from "./../../utils/generateGameArrays";

const LoadPage = ({ profiles, setPage, setGameArrays }) => {
  const startGame = event => {
    event.preventDefault();
    generateGameArrays(profiles).then(gameArrays => {
      setGameArrays(gameArrays);
      setPage("game");
    });
  };

  return (
    <>
      <div className="start-game">
        <h2>Instructions</h2>
        <p> Some Instructions....</p>
        <br />

        <h2>Are You Ready to Learn???</h2>
        <button id="start-button" onClick={startGame}>
          Start Game
        </button>
      </div>
    </>
  );
};

export default LoadPage;
