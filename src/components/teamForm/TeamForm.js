import React from "react";
import requestMembers from "./../../utils/requestMembers";

const TeamForm = () => {
  const [organisation, setOrganisation] = React.useState("");
  const [team, setTeam] = React.useState("");

  const updateSearch = event => {
    event.target.name === "team"
      ? setTeam(event.target.value)
      : setOrganisation(event.target.value);
  };

  const Team = async (organisation, team) => {
    const data = await requestMembers(organisation, team);
    console.log("Data in component", data);
  };

  const submitSearch = event => {
    event.preventDefault();
    console.log({ team }, { organisation });
    Team(organisation, team);
  };

  return (
    <form>
      <label>
        Organisation
        <input type="text" name="organisation" onChange={updateSearch} />
      </label>

      <label>
        Team
        <input type="text" name="team" onChange={updateSearch} />
      </label>

      <button onClick={submitSearch}>Get Team</button>
    </form>
  );
};

export default TeamForm;
