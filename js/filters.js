import {clearLayers, renderAdverts} from './map.js';
import {ANY_VALUE, FilterPrices, Prices} from './data.js';
import {debounce} from './util.js';

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
const housingPriceFilter = mapFilters.querySelector('#housing-price');
const housingRoomFilter = mapFilters.querySelector('#housing-rooms');
const housingGuestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFilter = mapFilters.querySelector('#housing-features');

const type = mapFilters.querySelector('#housing-type');
const price = mapFilters.querySelector('#housing-price');
const rooms = mapFilters.querySelector('#housing-rooms');
const guests = mapFilters.querySelector('#housing-guests');

const filterType = (advert) => advert.offer.type === type.value || type.value === ANY_VALUE;

const filterPrice = (advert) => {
  switch(price.value) {
    case FilterPrices.middle:
      return advert.offer.price >= Prices.low && advert.offer.price < Prices.high;
    case FilterPrices.low:
      return advert.offer.price < Prices.low;
    case FilterPrices.high:
      return advert.offer.price >= Prices.high;
    case ANY_VALUE:
      return true;
  }
};

const filterRooms = (advert) => advert.offer.rooms === Number(rooms.value) || rooms.value === ANY_VALUE;

const filterGuests = (advert) => advert.offer.guests === Number(guests.value) || guests.value === ANY_VALUE;

const filterFeatures = (advert) => {
  const checkedFeatures = featuresFilter.querySelectorAll('input[type=checkbox]:checked');
  return Array.from(checkedFeatures).every((feature) => advert.offer.features && advert.offer.features.includes(feature.value));
};

const filterAdverts = (adverts) => adverts.filter((advert) =>
  filterType(advert) &&
  filterPrice(advert) &&
  filterRooms(advert) &&
  filterGuests(advert) &&
  filterFeatures(advert),
);

const setFilters = (advert) => {
  const renderFilteredAdverts = debounce(() => {
    clearLayers();
    renderAdverts(filterAdverts(advert));
  });
  housingTypeFilter.addEventListener('change', () => {
    renderFilteredAdverts();
  });
  housingPriceFilter.addEventListener('change', () => {
    renderFilteredAdverts();
  });
  housingRoomFilter.addEventListener('change', () => {
    renderFilteredAdverts();
  });
  housingGuestsFilter.addEventListener('change', () => {
    renderFilteredAdverts();
  });
  featuresFilter.addEventListener('change', () => {
    renderFilteredAdverts();
  });
};

export {filterAdverts, setFilters};
