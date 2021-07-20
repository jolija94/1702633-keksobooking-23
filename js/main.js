import './data.js';
import './util.js';
import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import './filters.js';
import {getData} from './fetch.js';
import {addFilters, onFilter} from './filters.js';

getData((advert) => {
  onFilter(advert);
  addFilters(advert);
});
