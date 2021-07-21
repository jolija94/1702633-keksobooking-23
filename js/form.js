import {MIN_PRICE, MAX_PRICE, PriceTypes, NOT_GUESTS, MAX_ROOM} from './data.js';
import {setSameValue} from './util.js';
import {TOKYO_LAT_LNG, setDefaultMarkerState, setAddressValue, clearLayers, renderAdverts} from './map.js';
import {advertsPromise} from './fetch.js';

const formAdvert = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');

const priceInput = document.querySelector('#price');
priceInput.addEventListener('input', () => {
  const costPrice = priceInput.value;
  if (costPrice < MIN_PRICE) {
    priceInput.setCustomValidity(`Минимальная цена ${MIN_PRICE} ₽/ночь`);
  } else if (costPrice > MAX_PRICE) {
    priceInput.setCustomValidity(`Максимальная цена превышается на ${costPrice - MAX_PRICE}₽. Максимально возможная цена ${MAX_PRICE} ₽/ночь`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity('');
});


const roomNumber = document.querySelector('#room_number');
const roomCapacityGuests = document.querySelector('#capacity');

const checkCapacity = () => {
  if (
    Number(roomNumber.value) === MAX_ROOM && Number(roomCapacityGuests.value) !== NOT_GUESTS
  ) {
    roomNumber.setCustomValidity(`${MAX_ROOM} комнат нельзя выбрать для гостей!`);
  } else if (
    Number(roomNumber.value) !== MAX_ROOM && Number(roomCapacityGuests.value) === 0
  ) {
    roomNumber.setCustomValidity(`Не для гостей доступно только ${MAX_ROOM} комнат!`);
  } else if (
    (Number(roomNumber.value) !== MAX_ROOM) && Number(roomCapacityGuests.value) !== 0 && Number(roomNumber.value) < Number(roomCapacityGuests.value)
  ) {
    roomNumber.setCustomValidity('Количество гостей не должно превышать количество комнат!');
  } else {
    roomNumber.setCustomValidity('');
  }
  roomNumber.reportValidity('');

  return roomNumber.checkValidity() && roomCapacityGuests.checkValidity();
};

const arrivalTimeIn = document.querySelector('#timein');
const departureTimeOut = document.querySelector('#timeout');

arrivalTimeIn.addEventListener('change', () =>
  setSameValue(arrivalTimeIn, departureTimeOut),
);
departureTimeOut.addEventListener('change', () =>
  setSameValue(departureTimeOut, arrivalTimeIn),
);

const houseType = document.querySelector('#type');
roomNumber.addEventListener('change', () => {
  if (roomNumber.value < roomCapacityGuests.value && roomNumber.value !== MAX_ROOM) {
    roomNumber.value = roomCapacityGuests.value;
  }
  if (Number(roomNumber.value) === MAX_ROOM) {
    roomCapacityGuests.value = NOT_GUESTS;
  }
  checkCapacity();
});
roomCapacityGuests.addEventListener('change', () => {
  if (Number(roomCapacityGuests.value) === NOT_GUESTS) {
    roomNumber.value = MAX_ROOM;
  }
  checkCapacity();
});

houseType.addEventListener('change', () => {
  const value = PriceTypes[houseType.value];
  priceInput.min = value;
  priceInput.placeholder = value;
});

const clearForm = () => {
  formAdvert.reset();
  formFilter.reset();

  priceInput.min = PriceTypes[houseType.value];
  priceInput.placeholder = PriceTypes[houseType.value];

  setAddressValue(TOKYO_LAT_LNG.lat, TOKYO_LAT_LNG.lng);
  setDefaultMarkerState();
  clearLayers();
  advertsPromise.then(renderAdverts);
};

export {clearForm, checkCapacity};
