import React from "react";
import generateGameArrays from "./../../utils/generateGameArrays";

const LoadPage = ({ profiles, setPage, setGameArrays }) => {
  // const [gameArrays, setGameArrays] = React.useState("");

  React.useEffect(() => {
    const startGame = event => {
      event.preventDefault();
      generateGameArrays(profiles).then(gameArrays => {
        setGameArrays(gameArrays);
        setPage("game");
      });
    };

    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startGame);
    return () => startButton.removeEventListener("click", startGame);
  }, [profiles, setGameArrays, setPage]);

  return (
    <>
      <div className="start-game">
        <h2>Instructions</h2>
        <p> Some Instructions....</p>
        <br />

        <h2>Are You Ready to Learn???</h2>
        <button id="start-button">Start Game</button>
      </div>
    </>
  );
};

export default LoadPage;
