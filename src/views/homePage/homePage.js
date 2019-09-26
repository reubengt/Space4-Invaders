import React from "react";
import "./homePage.css";
import requestMembers from "../../utils/requestMembers";

import TeamForm from "../../components/TeamForm/TeamForm";
import InitiateGame from "../../components/InitiateGame/InitiateGame";

const HomePage = () => {
  const [organisation, setOrganisation] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [profiles, setProfiles] = React.useState("");

  const updateSearch = event => {
    event.target.name === "team"
      ? setTeam(event.target.value)
      : setOrganisation(event.target.value);
  };

  React.useEffect(() => {
    const submitSearch = event => {
      event.preventDefault();
      requestMembers(organisation, team).then(profiles => {
        setProfiles(profiles);
      });
    };

    window.addEventListener("submit", submitSearch);
    return () => window.removeEventListener("submit", submitSearch);
  }, [organisation, profiles, team]);

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
      <TeamForm updateSearch={updateSearch} />
      <InitiateGame profiles={profiles} />
    </>
  );
};

export default HomePage;
