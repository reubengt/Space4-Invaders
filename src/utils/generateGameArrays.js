const shuffle = array => {
  const arrClone = Array.from(array);
  let counter = arrClone.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = arrClone[counter];
    arrClone[counter] = arrClone[index];
    arrClone[index] = temp;
  }

  return arrClone;
};

const generateCorrectPositionArray = (shuffledProfiles, gameArray) => {
  return shuffledProfiles.map((profile, index) => {
    return gameArray[index].reduce((acc, testProfile, i) => {
      if (testProfile.name === profile.name) {
        acc = i;
      }
      return acc;
    }, 0);
  });
};

const generateGamePhasesArray = profiles => {
  return profiles.map(profile => {
    const phase = [profile];
    const randomProfiles = shuffle(profiles);
    for (let i = 0; phase.length < 4; i++) {
      if (randomProfiles[i].name !== profile.name)
        phase.push(randomProfiles[i]);
    }
    return shuffle(phase);
  });
};

const generateGameArrays = async profiles => {
  const shuffledProfiles = await shuffle(profiles);
  const gamePhasesArray = await generateGamePhasesArray(shuffledProfiles);
  const correctPositionArray = await generateCorrectPositionArray(
    shuffledProfiles,
    gamePhasesArray
  );
  return { gamePhasesArray, correctPositionArray };
};

export default generateGameArrays;
