const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM = 100;
const NOT_GUESTS = 0;
const ESC_EVENTS = ['Escape', 'Esc'];

const PriceTypes = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const HousingTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const Prices = {
  low: 10000,
  high: 50000,
};

const FilterPrices = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const MAX_ADVERTS_COUNT = 10;
const ANY_VALUE = 'any';
const ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';

export {
  MIN_PRICE,
  MAX_PRICE,
  PriceTypes,
  NOT_GUESTS,
  MAX_ROOM,
  MAX_ADVERTS_COUNT,
  ANY_VALUE,
  ADDRESS_GET,
  ADDRESS_POST,
  ESC_EVENTS,
  Prices,
  FilterPrices,
  HousingTypes
};
