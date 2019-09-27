import React from "react";
import "./homePage.css";
import requestMembers from "../../utils/requestMembers";

import TeamForm from "../../components/teamForm/TeamForm";
import SearchStatus from "../../components/SearchStatus/SearchStatus";

const HomePage = ({ setPage, profiles, setProfiles }) => {
  const loadGame = () => {
    setPage("load");
  };

  function handleSubmit(event) {
    event.preventDefault();
    const team = event.target.elements.team.value;
    const org = event.target.elements.organisation.value;
    setProfiles("loading");
    requestMembers(org, team).then(profiles => {
      setProfiles(profiles);
    });
  }

  return (
    <>
      <div>
        <h1>Welcome to the best Name and Face learning game... EVER</h1>
        <h4>
          It is much better than Anthony's terrible game whose faces you will
          quickly forever associate with their names thanks to our better game
        </h4>
      </div>
      <TeamForm handleSubmit={handleSubmit} />
      <SearchStatus profiles={profiles} loadGame={loadGame} />
    </>
  );
};

export default HomePage;
