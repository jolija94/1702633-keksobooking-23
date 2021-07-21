import {showAlert} from './util.js';
import {clearForm, checkCapacity} from './form.js';
import {showSuccessMessage, showDataErrorMessage, showErrorMessage} from './message.js';
import {ADDRESS_GET, ADDRESS_POST} from './data.js';

const form = document.querySelector('.ad-form');

const getData = () => fetch(ADDRESS_GET)
  .then((response) => {
    if(!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .catch(() => {
    showDataErrorMessage();
  });

const advertsPromise = getData();

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
        clearForm();
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => showAlert());
};

form.addEventListener('submit', function(evt){
  evt.preventDefault();
  if (!checkCapacity()) {
    return;
  }
  const formData = new FormData(this);
  setData(formData);
});

export {advertsPromise, setData};
