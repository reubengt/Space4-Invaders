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

  const membersArray = await fetch(
    `https://api.github.com/teams/${team_id}/members?access_token=${token}`
  ).then(res => {
    return res.json();
  });

  if (!membersArray[0]) {
    return "error";
  }

  const memberInfoPromiseArray = membersArray.map(member => {
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

  const memberInfoArray = await Promise.all(memberInfoPromiseArray).then(
    resultArray => {
      return resultArray;
    }
  );

  return memberInfoArray;
};

export default requestMembers;
