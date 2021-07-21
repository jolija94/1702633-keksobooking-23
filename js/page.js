const formAdvert = document.querySelector('.ad-form').querySelectorAll('fieldset');
const formFilter = document.querySelector('.map__filters');
const filters = formFilter.querySelectorAll('select, fieldset');

const disablePage = () => {
  formAdvert.forEach((item) => {
    item.disabled = true;
  });
  filters.forEach((item) => {
    item.disabled = true;
  });
  document.querySelector('.ad-form').classList.add('ad-form--disabled');
  formFilter.classList.add('map__filters--disabled');
};

const enableForm = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  formAdvert.forEach((item) => {
    item.disabled = false;
  });
};

const enableFilters = () => {
  formFilter.classList.remove('map__filters--disabled');
  filters.forEach((item) => {
    item.disabled = false;
  });
};

export {disablePage, enableFilters, enableForm}
