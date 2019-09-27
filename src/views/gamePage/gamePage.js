import React from "react";
import "./gamePage.css";

import { positionArray } from "./../../utils/constants";

let currentIndex = 0;

const GamePage = ({
  gameArrays: { gamePhasesArray, correctPositionArray }
}) => {
  const [translateX, settranslateX] = React.useState(positionArray[0]);
  const [selectedIndex, setselectedIndex] = React.useState(null);
  const [currentPhase, setCurrentPhase] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("start");
  const correctIndex = correctPositionArray[currentPhase];
  console.log({ correctIndex });
  const correctName = gamePhasesArray[currentPhase][correctIndex].name;
  console.log({ correctName });
  const styleObj = {
    transform: translateX
  };
  const image1Style = {
    backgroundImage: `url(${gamePhasesArray[currentPhase][0].image})`
  };
  const image2Style = {
    backgroundImage: `url(${gamePhasesArray[currentPhase][1].image})`
  };
  const image3Style = {
    backgroundImage: `url(${gamePhasesArray[currentPhase][2].image})`
  };
  const image4Style = {
    backgroundImage: `url(${gamePhasesArray[currentPhase][3].image})`
  };
  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowLeft") {
        if (currentIndex === 0) return;
        else {
          currentIndex -= 1;
          console.log({ currentIndex });
          settranslateX(positionArray[currentIndex]);
        }
      }
      if (event.key === "ArrowRight") {
        if (currentIndex === 3) return;
        else {
          currentIndex += 1;
          console.log({ currentIndex });
          settranslateX(positionArray[currentIndex]);
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
        if (currentPhase < gamePhasesArray.length - 1) {
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
  }, [correctIndex, currentPhase, gamePhasesArray.length, selectedIndex]);

  return (
    <div className="main-container">
      {gameStatus === "start" ? (
        <>
          <h1>***Space4 Invaders***</h1>
          <h2>PHASE {currentPhase + 1}</h2>
          <h2>Your Target is {correctName}</h2>
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
              style={image1Style}
            ></div>
            <div
              className={`img img2 ${
                selectedIndex === 1 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 1
                  ? "shot-down-incorrect"
                  : ""
              }`}
              style={image2Style}
            ></div>
            <div
              className={`img img3 ${
                selectedIndex === 2 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 2
                  ? "shot-down-incorrect"
                  : ""
              }`}
              style={image3Style}
            ></div>
            <div
              className={`img img4 ${
                selectedIndex === 3 && selectedIndex === correctIndex
                  ? "shot-down-correct"
                  : selectedIndex === 3
                  ? "shot-down-incorrect"
                  : ""
              }`}
              style={image4Style}
            ></div>
            <div className="player-character" style={styleObj}></div>
          </div>
          <h4>
            Controls: Left and Right Arrow Keys to move, Spacebar to Shoot.
          </h4>
        </>
      ) : (
        <div className="game-container">
          <h1>Game Over</h1>
          <h2>
            Your Score:{score}/{gamePhasesArray.length}
          </h2>
        </div>
      )}
    </div>
  );
};

export default GamePage;
