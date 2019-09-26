const token = process.env.REACT_APP_GITHUB_TOKEN;

const requestMembers = async (org, team) => {
  const teamData = await fetch(
    `https://api.github.com/orgs/${org}/teams/${team}?access_token=${token}`
  ).then(res => {
    return res.json();
  });
  if (!teamData.name) {
    return "error";
  }
  const team_id = teamData.id;
  console.log({ teamData });
  console.log({ team_id });

  const membersObject = await fetch(
    `https://api.github.com/teams/${team_id}/members?access_token=${token}`
  ).then(res => {
    return res.json();
  });

  console.log("members", membersObject);

  const memberInfoPromiseArray = membersObject.map(member => {
    return fetch(`${member.url}?access_token=${token}`)
      .then(res => res.json())
      .then(memberInfoFromApi => {
        const memberInfo = {};
        memberInfo.name = memberInfoFromApi.name
          ? memberInfoFromApi.name
          : memberInfoFromApi.login;
        memberInfo.image = memberInfoFromApi.avatar_url;
        return memberInfo;
      });
  });
  console.log("memberinfopromises", memberInfoPromiseArray);
  const memberInfoArray = await Promise.all(memberInfoPromiseArray).then(
    resultArray => {
      return resultArray;
    }
  );
  console.log("final member info array", memberInfoArray);
  return memberInfoArray;
};

export default requestMembers;
