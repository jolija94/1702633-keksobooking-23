import {getRandomIntInclusive, getRandom, getRandomElementArray} from './util.js'
import {TYPES_ARRAY, HOURS_ARRAY, FEATURES_ARRAY, PHOTOS_ARRAY, TITLES_ARRAY, DESCRIPTION_ARRAY, ADT, getRandomListArray, createAdt, createSomeAdt} from './data.js'

const userTemplateFragment = document.querySelector('#card').content.querySelector('.popup');

const createAdt = createSomeAdt()

const housingType = {
  flat:'Квартира',
  bungalow:'Бунгало',
  house:'Дом',
  palace:'Дворец',
  hotel:'Отель',
};

const setAdt = (adtElement, visible) => {
  if (!visible) {
    adtElement.classList.remove('hidden');
    return;
  }
  adtElement.classList.add('hidden');
};

const createNewAdt = createAdt.forEach(() => {
      const adtElements = userTemplateFragment.cloneNode(true);

      const title = querySelector('.popup__title');
      setAdt(title, adtElement.offer.title);

      const address = querySelector('.popup__text--address');
      setAdt(address, adtElement.offer.address);

      const price = querySelector('.popup__text--price');
      setAdt(price, adtElement.`${offer.price} ₽/ночь`);

      const capacity = querySelector('.popup__text--capacity');
      setAdt(capacity, adtElement.offer.rooms && adtElement.offer.guests);

      const time = querySelector('.popup__text--time');
      setAdt(time, adtElement.offer.checkin && adtElement.offer.checkout);

      const features = querySelector('.popup__features');
      setAdt(features, adtElement.offer.features);

      const description = querySelector('.popup__description');
      setAdt(description, adtElement.offer.features);

      const photos = querySelector('.popup__photos');
      setAdt(photos, adtElement.offer.photos);

      const avatar = querySelector('.popup__avatar');
      setAdt(avatar, adtElement.autor.avatar);

      });

});

export {userTemplateFragment, housingType, setAdt, createNewAdt}

