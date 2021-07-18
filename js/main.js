import './data.js';
import './util.js';
import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import {getData} from './fetch.js';
import {createServerAdt} from './map.js';

getData((adt) => {
  createServerAdt(adt);
});
