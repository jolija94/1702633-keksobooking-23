import {isEscEvent} from './util.js';

const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content
  .querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content
  .querySelector('.error').cloneNode(true);
const dataErrorMessage = document.querySelector('#data__error').content
  .querySelector('.error').cloneNode(true);

const onEscKeyDownSuccess = (evt) => {
  if (isEscEvent(evt)) {
    successMessage.remove();
    document.removeEventListener('keydown', onEscKeyDownSuccess);
  }
};

const onEscKeyDownError = (evt) => {
  if (isEscEvent(evt)) {
    errorMessage.remove();
    document.removeEventListener('keydown', onEscKeyDownError);
  }
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);

  document.addEventListener('keydown', onEscKeyDownSuccess);

  successMessage.addEventListener('click', () => {
    successMessage.remove();
  });
};

const showErrorMessage = () => {
  body.appendChild(errorMessage);

  document.addEventListener('keydown', onEscKeyDownError);

  errorMessage.addEventListener('click', () => {
    errorMessage.remove();
  });
};

const onEscKeyDownDataError = (evt) => {
  if (isEscEvent(evt)) {
    dataErrorMessage.remove();
    document.removeEventListener('keydown', onEscKeyDownDataError);
  }
};

const showDataErrorMessage = () => {
  body.appendChild(dataErrorMessage);

  document.addEventListener('keydown', onEscKeyDownDataError);

  dataErrorMessage.addEventListener('click', () => {
    dataErrorMessage.remove();
  });
};


export {showSuccessMessage, showDataErrorMessage, showErrorMessage};

