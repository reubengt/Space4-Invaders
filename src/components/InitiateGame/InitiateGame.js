import React from "react";

const InitiateGame = ({ profiles }) => {
  const notFound = <p>not Found</p>;
  const searchForTeam = <p>Search for a team</p>;
  const loading = <p> Loading </p>;
  const loadGame = Array.isArray(profiles) ? (
    <p> {profiles[0].name} </p>
  ) : (
    <p> error </p>
  );

  return (
    <>
      {profiles === "error"
        ? notFound
        : profiles === ""
        ? searchForTeam
        : Array.isArray(profiles)
        ? loadGame
        : loading}
    </>
  );
};

export default InitiateGame;
