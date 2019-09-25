import { token } from "./../token.js";
const teamRequest = async (org, team) => {
  const teamData = await fetch(
    `https://api.github.com/orgs/${org}/teams/${team}?access_token=${token}`
  ).then(res => {
    return res.json();
  });
  return teamData;
};

export default teamRequest;
