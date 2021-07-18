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

function getRandomElementArray(elements) {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
}

const sameValue = (currentValue, changeValue) => {
  changeValue.value = currentValue.value;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = message;

  document.body.append(alertContainer);
  alertContainer.classList.add('alert-message');
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export {getRandomIntInclusive, getRandom, getRandomElementArray, sameValue, showAlert};
