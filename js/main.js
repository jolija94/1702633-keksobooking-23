import './data.js';
import './util.js';
import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import './filters.js';
import {advertsPromise} from './fetch.js';
import {setFilters} from './filters.js';
import {renderAdverts} from './map.js';
import {enableFilters} from './page.js';

advertsPromise.then((adverts) => {
  enableFilters();
  renderAdverts(adverts);
  setFilters(adverts);
});

