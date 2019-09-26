import React from "react";
import "./homePage.css";
import requestMembers from "../../utils/requestMembers";

import TeamForm from "../../components/teamForm/TeamForm";
import InitiateGame from "../../components/InitiateGame/InitiateGame";

const HomePage = ({ setPage, profiles, setProfiles }) => {
  const [organisation, setOrganisation] = React.useState("");
  const [team, setTeam] = React.useState("");

  const updateSearch = event => {
    event.target.name === "team"
      ? setTeam(event.target.value)
      : setOrganisation(event.target.value);
  };

  const startGame = () => {
    setPage("game");
  };

  React.useEffect(() => {
    const submitSearch = event => {
      event.preventDefault();
      setProfiles("loading");
      requestMembers(organisation, team).then(profiles => {
        console.log(
          profiles
            .map(
              profile => `{name: "${profile.name}", image: "${profile.image}"},`
            )
            .join("")
        );
        setProfiles(profiles);
      });
    };

    window.addEventListener("submit", submitSearch);
    return () => window.removeEventListener("submit", submitSearch);
  }, [organisation, profiles, setProfiles, team]);

  return (
    <>
      <div>
        <h1>Welcome to the best Name and Face learning game... EVER</h1>
        <h4>
          It is much better than Anthony's terrible game whose faces you will
          quickly forever associate with their names thanks to our better game
        </h4>
      </div>
      <TeamForm updateSearch={updateSearch} />
      <InitiateGame profiles={profiles} startGame={startGame} />
    </>
  );
};

export default HomePage;
