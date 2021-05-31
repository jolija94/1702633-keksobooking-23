function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max){
    const chosenNumber = min;
    min = max;
    max = chosenNumber;
  }

  const number = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  if (number < 0) {
    return 'too bad';
  }
  return number;
}

getRandomIntInclusive();

function getRandom(min, max, fixing) {
  if (min > max) {
    const chosenNumber = min;
    min = max;
    max = chosenNumber;
  }
  const number = Math.random() * (max - min) + min;
  if (number < 0) {
    return 'very bad';
  }
  return number.toFixed(fixing);
}
getRandom();
