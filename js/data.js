import {getRandomIntInclusive, getRandom, getRandomElementArray} from './util.js';

const TYPES_ARRAY = [ 'palace', 'flat', 'house', 'bungalow', 'hotel'];
const HOURS_ARRAY = ['12:00', '13:00', '14:00'];
const FEATURES_ARRAY = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_ARRAY = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TITLES_ARRAY = ['Арабская ночь', 'Вечер на Мальдивах', 'Утро в Геленджике', 'День с Итальяским кофе'];
const DESCRIPTION_ARRAY = ['Почувствуй себя Арабским шейхом', 'И даже дошик на завтрак', 'Воплоти мечты Гейши'];
const ADT = 10;

const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM = 100;
const NOT_GUESTS = 0;
const PRICE_TYPE = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const getRandomListArray = (elements) => elements.slice (0, getRandomIntInclusive(1, 5));

const creationAdt = () => {
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


const creationSomeAdt = new Array(ADT).fill(null).map(() => creationAdt());

export {TYPES_ARRAY, HOURS_ARRAY, FEATURES_ARRAY, PHOTOS_ARRAY, TITLES_ARRAY, DESCRIPTION_ARRAY, ADT, getRandomListArray, creationAdt, creationSomeAdt};
export {MIN_PRICE, MAX_PRICE, PRICE_TYPE,NOT_GUESTS, MAX_ROOM};
