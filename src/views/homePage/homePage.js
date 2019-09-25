import React from "react";
import "./homePage.css";
import TeamForm from "../../components/teamForm/TeamForm";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Welcome to the best Name and Face learning game... EVER</h1>
        <h4>
          It is much better than Georgia and Anthony's terrible game whose faces
          you will quickly forever associate with their names thanks to our
          better game
        </h4>
      </div>
      <TeamForm />
    </>
  );
};

export default HomePage;
