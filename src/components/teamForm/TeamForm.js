import React from "react";
import requestMembers from "./../../utils/requestMembers";

const TeamForm = () => {
  const [organisation, setOrganisation] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [profiles, setProfiles] = React.useState("");

  const updateSearch = event => {
    event.target.name === "team"
      ? setTeam(event.target.value)
      : setOrganisation(event.target.value);
  };

  const Team = async (organisation, team) => {
    const data = await requestMembers(organisation, team);
    console.log("Data in component", data);
  };

  // const submitSearch = event => {
  //   event.preventDefault();
  //   console.log({ team }, { organisation });
  //   // requestMembers(organisation, team);
  //   setProfiles(
  //     requestMembers(organisation, team).then(profiles => {
  //       console.log("searching profiles", profiles);
  //       return profiles.people;
  //     })
  //   );
  //   console.log({ profiles });
  // };

  React.useEffect(() => {
    const submitSearch = event => {
      event.preventDefault();
      console.log({ team }, { organisation });
      requestMembers(organisation, team).then(profiles => {
        console.log("recieved profiles", profiles);
        setProfiles(profiles);
      });
      console.log("search started. profiles currently =", profiles);
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
