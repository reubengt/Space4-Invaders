import React from "react";

const TeamForm = () => {
  const [organisation, setOrganisation] = React.useState("");
  const [team, setTeam] = React.useState("");

  const updateSearch = event => {
    event.target.name === "team"
      ? setTeam(event.target.value)
      : setOrganisation(event.target.value);
  };

  const submitSearch = event => {
    event.preventDefault();
    console.log(event);
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
