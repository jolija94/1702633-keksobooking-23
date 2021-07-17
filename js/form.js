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


// const titleAdt = document.querySelector('#title');
// const LENGTH_MIN_TITLE = 30;
// const LENGTH_MAX_TITLE = 100;

// const priceAdt = document.querySelector('#price');
// const MAX_PRICE = 1000000;

// const roomNumber = document.querySelector('#room_number');
// const capacityRoom = document.querySelector('#capacity');
// const roomCapacityOptions = document.querySelector('#option');
// const roomCapacityGuests = document.querySelector('#value')
// const ROOM_NO_GUESTS = document.querySelector('value')

