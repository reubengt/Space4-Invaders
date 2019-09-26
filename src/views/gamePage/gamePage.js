import React from "react";
import "./gamePage.css";
import { positionArray } from "./../../utils/constants";
import generateGameArrays from "../../utils/generateGameArrays";

const GamePage = ({ profiles }) => {
  const [gameArrays, setGameArrays] = React.useState("");
  const [leftOffset, setleftOffset] = React.useState(positionArray[0]);
  const [selectedIndex, setselectedIndex] = React.useState(null);

  React.useEffect(() => {
    const startGame = () => {
      generateGameArrays(profiles).then(gameArrays => {
        console.log(gameArrays);
        setGameArrays(gameArrays);
      });
    };

    if (Array.isArray(profiles)) {
      // const startButton = document.getElementById("start-button");
      // startButton.addEventListener("click", startGame);
      // return () => startButton.removeEventListener("click", startGame);
    }
  }, [gameArrays, profiles, setGameArrays]);

  // generateGameArrays(profiles).then(gameArrays => {
  //   console.log(gameArrays);
  //   setGameArrays(gameArrays);
  // });
  console.log(gameArrays[0]);
  // console.log(gameArrays[1]);

  const styleObj = {
    left: leftOffset
  };
  React.useEffect(() => {
    let currentIndex = 0;
    const handleKeyDown = event => {
      if (event.key === "ArrowLeft") {
        if (currentIndex === 0) return;
        else {
          currentIndex -= 1;
          setleftOffset(positionArray[currentIndex]);
        }
      }
      if (event.key === "ArrowRight") {
        if (currentIndex === 3) return;
        else {
          currentIndex += 1;
          setleftOffset(positionArray[currentIndex]);
        }
      }
      if (event.key === " ") {
        setselectedIndex(currentIndex);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="main-container">
      <div className="game-container">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div
          className={`img img1 ${selectedIndex === 0 ? "shot-down" : ""}`}
        ></div>
        <div
          className={`img img2 ${selectedIndex === 1 ? "shot-down" : ""}`}
        ></div>
        <div
          className={`img img3 ${selectedIndex === 2 ? "shot-down" : ""}`}
        ></div>
        <div
          className={`img img4 ${selectedIndex === 3 ? "shot-down" : ""}`}
        ></div>
        <div className="player-character" style={styleObj}></div>
      </div>
    </div>
  );
};

export default GamePage;
