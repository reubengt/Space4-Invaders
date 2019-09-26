import React from "react";
import ReactDOM from "react-dom";
import "./gamePage.css";
const GamePage = () => {
  const firstPosition = "calc(0% + (25% / 2) - 10px)";
  const secondPosition = "calc(25% + (25% / 2) - 10px)";
  const thirdPosition = "calc(50% + (25% / 2) - 10px)";
  const fourthPosition = "calc(75% + (25% / 2) - 10px)";
  const positionArray = [
    firstPosition,
    secondPosition,
    thirdPosition,
    fourthPosition
  ];
  const imageArray = ["img1", "img2", "img3", "img4"];

  const [leftOffset, setleftOffset] = React.useState(firstPosition);
  const [selectedImage, setselectedImage] = React.useState("img1");
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
          setselectedImage(imageArray[currentIndex]);
        }
      }
      if (event.key === "ArrowRight") {
        if (currentIndex === 3) return;
        else {
          currentIndex += 1;
          setleftOffset(positionArray[currentIndex]);
          setselectedImage(imageArray[currentIndex]);
        }
      }
      if (event.key === " ") {
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
        <div className="img img1"></div>
        <div className="img img2"></div>
        <div className="img img3"></div>
        <div className="img img4"></div>
        <div className="player-character" style={styleObj}></div>
      </div>
    </div>
  );
};

export default GamePage;
