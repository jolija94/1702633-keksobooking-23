import {TYPES_ARRAY, HOURS_ARRAY, FEATURES_ARRAY, PHOTOS_ARRAY, TITLES_ARRAY, DESCRIPTION_ARRAY, ADT} from './data.js';
import {getRandomIntInclusive, getRandom, getRandomElementArray} from './util.js';


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

const createSomeAdt = new Array(ADT).fill(null).map(() => createAdt());
createSomeAdt();
