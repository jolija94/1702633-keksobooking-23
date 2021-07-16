const formAdt = document.querySelector('.ad-form');
const headerFormAdt = document.querySelector('.ad-form-header');
const elementsFormAdt = document.querySelector('.ad-form__element');
const buttonSubmitFormAdt = document.querySelector('.ad-form__submit');
const buttonResetAdt = document.querySelector('.ad-form__reset');

const formMap = document.querySelector('.map__filters');
const filtersMap = document.querySelector('.map__filter');
const featuresMap = document.querySelector('.map__features');

const toggleDisabledPage = (inactive) => {
  if (inactive) {
    formAdt.classList.add('ad-form--disabled');
    formMap.classList.add('.map__filters--disabled');
  } else {
    formAdt.classList.remove('ad-form--disabled');
    formMap.classList.remove('map__filters--disabled');
  }
  headerFormAdt.disabled = inactive;
  elementsFormAdt.forEach((elementFormAdt) => {elementFormAdt.disabled = inactive;});
  buttonSubmitFormAdt.disabled = inactive;
  buttonResetAdt.disabled = inactive;
  filtersMap.forEach((filterMap) => {filterMap.disabled = inactive;});
  featuresMap.disabled = inactive;
};

toggleDisabledPage(true);
