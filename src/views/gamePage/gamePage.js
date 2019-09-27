import React from "react";
import "./gamePage.css";
import {
  positionArray,
  sampleGameArray,
  sampleCorrectArray
} from "./../../utils/constants";
let currentIndex = 0;
const GamePage = () => {
  const [leftOffset, setleftOffset] = React.useState(positionArray[0]);
  const [selectedIndex, setselectedIndex] = React.useState(null);
  const [currentPhase, setCurrentPhase] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("start");
  const correctIndex = sampleCorrectArray[currentPhase];
  console.log({ correctIndex });
  const correctName = sampleGameArray[currentPhase][correctIndex].name;
  console.log({ correctName });
  const styleObj = {
    left: leftOffset
  };
  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowLeft") {
        if (currentIndex === 0) return;
        else {
          currentIndex -= 1;
          console.log({ currentIndex });
          setleftOffset(positionArray[currentIndex]);
        }
      }
      if (event.key === "ArrowRight") {
        if (currentIndex === 3) return;
        else {
          currentIndex += 1;
          console.log({ currentIndex });
          setleftOffset(positionArray[currentIndex]);
        }
      }
      console.log("currentPhase before hitting enter", currentPhase);
      if (event.key === " ") {
        setselectedIndex(currentIndex);
        console.log({ currentIndex }, { correctIndex });
        console.log({ currentPhase });
        if (currentIndex === correctIndex) {
          setScore(s => s + 1);
        }
        console.log("index of selection", currentIndex);
        //load next game phase
        if (currentPhase < sampleGameArray.length - 1) {
          setCurrentPhase(oldPhase => oldPhase + 1);
        } else {
          setGameStatus("end");
        }
        //reset so nothing is selected
        setselectedIndex(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctIndex, currentPhase, selectedIndex]);

  return (
    <div className="main-container">
      {gameStatus === "start" ? (
        <>
          <h2>Your Target is {correctName}</h2>
          <h2>correctIndex {correctIndex}</h2>
          <h3>score:{score}</h3>
          <div className="game-container">
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div
              className={`img img1 ${
                selectedIndex === 0 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 0
                  ? "shot-down-incorrect"
                  : ""
              }`}
            ></div>
            <div
              className={`img img2 ${
                selectedIndex === 1 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 1
                  ? "shot-down-incorrect"
                  : ""
              }`}
            ></div>
            <div
              className={`img img3 ${
                selectedIndex === 2 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 2
                  ? "shot-down-incorrect"
                  : ""
              }`}
            ></div>
            <div
              className={`img img4 ${
                selectedIndex === 3 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 3
                  ? "shot-down-incorrect"
                  : ""
              }`}
            ></div>
            <div className="player-character" style={styleObj}></div>
          </div>
        </>
      ) : (
        <div className="game-container">
          <h1>Game Over</h1>
          <h2>
            Your Score:{score}/{sampleGameArray.length}
          </h2>
        </div>
      )}
    </div>
  );
};

export default GamePage;
