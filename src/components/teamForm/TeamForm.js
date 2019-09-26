import React from "./node_modules/react";
import requestMembers from "../../utils/requestMembers";

const TeamForm = () => {
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
      <form>
        <label>
          Organisation
          <input type="text" name="organisation" onChange={updateSearch} />
        </label>

        <label>
          Team
          <input type="text" name="team" onChange={updateSearch} />
        </label>

        <button className="submit-button">Get Team</button>
      </form>

      {profiles === "error" ? (
        <p>not Found</p>
      ) : profiles === "" ? (
        <p>Search for a team</p>
      ) : Array.isArray(profiles) ? (
        <p> {profiles[0].name} </p>
      ) : (
        <p> Loading </p>
      )}
    </>
  );
};

export default TeamForm;
