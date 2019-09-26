import React from "react";
import "./gamePage.css";
import {
  positionArray,
  sampleGameArray,
  sampleCorrectArray
} from "./../../utils/constants";
const GamePage = () => {
  const [leftOffset, setleftOffset] = React.useState(positionArray[0]);
  const [selectedIndex, setselectedIndex] = React.useState(null);
  const [currentPhase, setCurrentPhase] = React.useState(0);
  const correctIndex = sampleCorrectArray[currentPhase];
  console.log(correctIndex);
  const correctName = sampleGameArray[currentPhase][correctIndex].name;
  console.log(correctName);

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
      <h2>{correctName}</h2>
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
    </div>
  );
};

export default GamePage;
