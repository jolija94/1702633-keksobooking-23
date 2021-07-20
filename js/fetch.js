import {showAlert} from './util.js';
import {clearForm} from './form.js';
import {SUCCESS, ERROR, getMessage} from './message.js';
import {ADDRESS_GET, ADDRESS_POST} from './data.js';

const getData = (onSuccess) => fetch(ADDRESS_GET)
  .then((response) => response.json())
  .then((advert) => {
    onSuccess(advert);
  })
  .catch(() => {
    showAlert();
  });

const setData = (body) => {
  fetch(
    ADDRESS_POST ,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        getMessage(SUCCESS);
        clearForm();
      } else {
        getMessage(ERROR);
      }
    })
    .catch(() => showAlert());
};

export {getData, setData};
