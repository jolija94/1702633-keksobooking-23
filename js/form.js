const formAdt = document.querySelector('.ad-form').querySelectorAll('fieldset');
const formMap = document.querySelector('.map__filters');
const featuresMap = document.querySelector('.map__features');
const getFiltersSelects = formMap.querySelectorAll('select');

const toggleDisabledPage = (inactive) => {
  formAdt.forEach((item) => {
    item.disabled = inactive;
  });
  getFiltersSelects.forEach((item) => {
    item.disabled = inactive;
  });
  featuresMap.disabled = inactive;
  if (inactive) {
    document.querySelector('.ad-form').classList.add('ad-form--disabled');
    formMap.classList.add('map__filters--disabled');
  } else {
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    formMap.classList.remove('map__filters--disabled');
  }
};

export {toggleDisabledPage};

import {MAX_PRICE, MIN_PRICE, PRICE_TYPE, NOT_GUESTS, MAX_ROOM} from './data.js';
import {sameValue} from './util.js';

const priceAdt = document.querySelector('#price');
priceAdt.addEventListener('input', () => {
  const costPrice = priceAdt.value;
  if (costPrice < MIN_PRICE) {
    priceAdt.setCustomValidity(`Минимальная цена ${MIN_PRICE} ₽/ночь`);
  } else if (costPrice > MAX_PRICE) {
    priceAdt.setCustomValidity(`Максимальная цена превышается на ${costPrice - MAX_PRICE}₽. Максимально возможная цена ${MAX_PRICE} ₽/ночь`);
  } else {
    priceAdt.setCustomValidity('');
  }
  priceAdt.reportValidity('');
});

const roomNumber = document.querySelector('#room_number');
const roomCapacityGuests = document.querySelector('#capacity');

const checkCapacity = (input) => {
  if (
    Number(roomNumber.value) === MAX_ROOM && Number(roomCapacityGuests.value) !== NOT_GUESTS
  ) {
    input.setCustomValidity(`${MAX_ROOM} комнат нельзя выбрать для гостей!`);
  } else if (
    Number(roomNumber.value) !== MAX_ROOM && Number(roomCapacityGuests.value) === 0
  ) {
    input.setCustomValidity(`Не для гостей доступно только ${MAX_ROOM} комнат!`);
  } else if (
    (Number(roomNumber.value) !== MAX_ROOM) && Number(roomCapacityGuests.value) !== 0 && Number(roomNumber.value) < Number(roomCapacityGuests.value)
  ) { input.setCustomValidity('Количество гостей не должно превышать количество комнат!');
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity('');
};

const arrivalTimeIn = document.querySelector('#timein');
const departureTimeOut = document.querySelector('#timeout');

arrivalTimeIn.addEventListener('change', () =>
  sameValue(arrivalTimeIn, departureTimeOut),
);
departureTimeOut.addEventListener('change', () =>
  sameValue(departureTimeOut, arrivalTimeIn),
);

const houseType = document.querySelector('#type');
roomNumber.addEventListener('change', () => {
  if (roomNumber.value < roomCapacityGuests.value && roomNumber.value !== MAX_ROOM){
    roomNumber.value = roomCapacityGuests.value;
  } if (Number(roomNumber.value) === MAX_ROOM){
    roomCapacityGuests.value = NOT_GUESTS;
  }
  checkCapacity(roomNumber);
});
roomCapacityGuests.addEventListener('change', () => {
  if (Number(roomCapacityGuests.value) === NOT_GUESTS) {
    roomNumber.value = MAX_ROOM;
  }
  checkCapacity(roomCapacityGuests);
});

houseType.addEventListener('change', () => {
  const value = PRICE_TYPE[houseType.value.toUpperCase()];
  switch(houseType.value) {
    case 'flat':
      priceAdt.setAttribute('min', value);
      priceAdt.setAttribute('placeholder', value);
      break;
    case 'bungalow':
      priceAdt.setAttribute('min', value);
      priceAdt.setAttribute('placeHolder', value);
      break;
    case 'house':
      priceAdt.setAttribute('min', value);
      priceAdt.setAttribute('placeholder', value);
      break;
    case 'palace':
      priceAdt.setAttribute('min', value);
      priceAdt.setAttribute('placeholder', value);
      break;
    case 'hotel':
      priceAdt.setAttribute('min', value);
      priceAdt.setAttribute('placeholder', value);
      break;
  }
});

const valueFlat = PRICE_TYPE[houseType.value.toUpperCase()];

if (houseType.value === 'flat') {
  priceAdt.setAttribute('min', valueFlat);
  priceAdt.setAttribute('placeholder', valueFlat );
}
