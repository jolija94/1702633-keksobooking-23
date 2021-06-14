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


const TYPES_ARRAY = [ 'palace', 'flat', 'house', 'bungalow', 'hotel'];
const HOURS_ARRAY = ['12:00', '13:00', '14:00'];
const FEATURES_ARRAY = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ARRAY = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TITLES_ARRAY = ['Арабская ночь', 'Вечер на Мальдивах', 'Утро в Геленджике', 'День с Итальяским кофе'];
const DESCRIPTION_ARRAY = ['Почувствуй себя Арабским шейхом', 'И даже дошик на завтрак', 'Воплоти мечты Гейши'];

const getRandomElementArray = (elements) => elements [
  getRandomIntInclusive( 0,elements.length - 1)
];

const getRandomListArray = (elements) => elements.slice (0, getRandomIntInclusive(1, 5));

const createAdt = () => {
  const LAT = getRandom(35.65000, 35.70000, 5);
  const LNG = getRandom(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user0${  getRandom(1, 9)  }.png`,
    },
    offer: {
      title: getRandomElementArray(TITLES_ARRAY),
      address: `${LAT}, ${LNG}` ,
      price: getRandomIntInclusive(1000, 1000000),
      type: getRandomElementArray(TYPES_ARRAY),
      rooms: getRandomIntInclusive(1, 99999),
      guests: getRandomIntInclusive(1, 300000),
      checkin: getRandomElementArray(HOURS_ARRAY),
      checkout: getRandomElementArray(HOURS_ARRAY),
      features: getRandomListArray(FEATURES_ARRAY),
      description: getRandomElementArray(DESCRIPTION_ARRAY),
      photos: getRandomListArray(PHOTOS_ARRAY),
    },
    location: {
      lat: LAT,
      lng: LNG,
    },
  };
};
const createSomeAdt = new Array(10).fill(null).map(() => createAdt());
console.log(createSomeAdt);
