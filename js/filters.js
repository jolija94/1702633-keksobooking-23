import {  markerGroup, createAdtMap} from './map.js';
//import { creationPopups } from './popup.js';

const MAX_ADT = 10;

const PRICES = {
  low: 10000,
  high: 50000,
};

const mapFilters = document.querySelector('.map__filters');
const mapCheckboxFilterts = document.querySelectorAll('.map__checkbox');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
const housingPriceFilter = mapFilters.querySelector('#housing-price');
const housingRoomFilter = mapFilters.querySelector('#housing-rooms');
const housingGuestsFilter = mapFilters.querySelector('#housing-guests');
const housingFeaturesFilter = mapFilters.querySelectorAll('.map__checkbox');

mapCheckboxFilterts.forEach((housingFeatures) => {
  housingFeatures.checked = false;
});

const onFilter = (adt) => {
  const filtrationAdt = adt.filter((adts) => {
    let result = true;
    if (housingTypeFilter.value !== 'any' && adts.offer.type !== housingTypeFilter.value)
    {
      result = false;
    }
    if (housingPriceFilter.value !== 'any') {
      if (housingPriceFilter.value === 'low' &&  adts.offer.price > PRICES.low)
      {
        result = false;
      }
      if (housingPriceFilter.value === 'middle' && (adts.offer.price < PRICES.low || adts.offer.price > PRICES.high))
      {
        result = false;
      }
      if (housingPriceFilter.value === 'high' &&  adts.offer.price < PRICES.high)
      {
        result = false;
      }
    }
    if (housingRoomFilter.value !== 'any' && adts.offer.rooms !== Number(housingRoomFilter.value))
    {
      result = false;
    }
    if (housingGuestsFilter.value !== 'any' && adts.offer.guests !== Number(housingGuestsFilter.value))
    {
      return false;
    }
    housingFeaturesFilter.forEach((feature) => {
      if (feature.checked && adts.offer.features && !adts.offer.features.includes(feature.value))
      {
        result = false;
      }
    },
    );
    return result;
  });
  const filterArray = filtrationAdt.slice(0, MAX_ADT);
  //creationPopups(filterArray);
  createAdtMap(filterArray);

};

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {debounce};

const addFilters = (ads) => {
  const debounced = debounce(() => {
    markerGroup.clearLayers();
    onFilter(ads);
  });
  housingTypeFilter.addEventListener('change', debounced);
  housingPriceFilter.addEventListener('change', debounced);
  housingRoomFilter.addEventListener('change', debounced);
  housingGuestsFilter.addEventListener('change', debounced);
  housingFeaturesFilter.forEach((feature) => {
    feature.addEventListener('change', debounced);
  });
};

export {onFilter, addFilters};
