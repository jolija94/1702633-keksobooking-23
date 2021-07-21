import {markerGroup, createServerAdt} from './map.js';
import {MAX_ADTS, PRICES, ANY, LOW, MIDDLE, HIGH} from './data.js';

const mapFilters = document.querySelector('.map__filters');
const mapCheckboxFilters = document.querySelectorAll('.map__checkbox');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
const housingPriceFilter = mapFilters.querySelector('#housing-price');
const housingRoomFilter = mapFilters.querySelector('#housing-rooms');
const housingGuestsFilter = mapFilters.querySelector('#housing-guests');
const housingFeaturesFilter = mapFilters.querySelectorAll('.map__checkbox');

mapCheckboxFilters.forEach((housingFeatures) => {
  housingFeatures.checked = false;
});

const onFilter = (advert) => {
  const filtrationAdt = advert.filter((adverts) => {
    let result = true;
    if (housingTypeFilter.value !== ANY && adverts.offer.type !== housingTypeFilter.value)
    {
      result = false;
    }
    if (housingRoomFilter.value !== ANY && adverts.offer.rooms !== Number(housingRoomFilter.value))
    {
      result = false;
    }
    if (housingGuestsFilter.value !== ANY && adverts.offer.guests !== Number(housingGuestsFilter.value))
    {
      return false;
    }
    if (housingPriceFilter.value !== ANY) {
      if (housingPriceFilter.value === LOW &&  adverts.offer.price > PRICES.low)
      {
        result = false;
      }
      if (housingPriceFilter.value === MIDDLE && (adverts.offer.price < PRICES.low || adverts.offer.price > PRICES.high))
      {
        result = false;
      }
      if (housingPriceFilter.value === HIGH &&  adverts.offer.price < PRICES.high)
      {
        result = false;
      }
    }
    housingFeaturesFilter.forEach((feature) => {
      if ((feature.checked && adverts.offer.features && !adverts.offer.features.includes(feature.value)))
      {
        result = false;
      }
    },
    );
    return result;
  });
  const filterArray = filtrationAdt.slice(0, MAX_ADTS);
  createServerAdt(filterArray);
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


const addFilters = (advert) => {
  const debounced = debounce(() => {
    markerGroup.clearLayers();
    onFilter(advert);
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
