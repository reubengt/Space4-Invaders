import React from "react";

const TeamForm = ({ updateSearch }) => {
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
    </>
  );
};

export default TeamForm;
