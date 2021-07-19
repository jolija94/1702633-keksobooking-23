import {showAlert} from './util.js';
import {clearForm} from './form.js';
import {SUCCESS, ERROR, getMessage} from './message.js';

const ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';

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
