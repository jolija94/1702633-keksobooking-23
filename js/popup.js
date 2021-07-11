import {getRandomIntInclusive, getRandom, getRandomElementArray} from './util.js'
import {TYPES_ARRAY, HOURS_ARRAY, FEATURES_ARRAY, PHOTOS_ARRAY, TITLES_ARRAY, DESCRIPTION_ARRAY, ADT, getRandomListArray, createAdt, createSomeAdt} from './data.js'

const userTemplateFragment = document.querySelector('#card').content.querySelector('.popup');
const map = document.querySelector('#map-canvas');
const mapCanvas = document.querySelector('#map-canvas');

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

const  setAdtElementContent = (adtElement, content, isHtml) => {
  if (isHtml) {
    adtElement.innerHTML = content;
    return;
  }
  adtElement.textContent = content;
};

const createNewAdt = createAdt.forEach(() => {
      const adtElements = userTemplateFragment.cloneNode(true);

      const title = querySelector('.popup__title');
      setAdt(title, adtElement.offer.title);
      setAdtElementContent(title, adtElement.offer.title, false);

      const address = querySelector('.popup__text--address');
      setAdt(address, adtElement.offer.address);
      setAdtElementContent(address, adtElement.offer.address, false);

      const price = querySelector('.popup__text--price');
      setAdt(price, adtElement.offer.price);
      setAdtElementContent(price, `${adtElement.offer.price} <span>₽/ночь</span>`, true);

      const capacity = querySelector('.popup__text--capacity');
      setAdt(capacity, adtElement.offer.rooms && adtElement.offer.guests);
      setAdtElementContent(capacity, `${adtElement.offer.rooms} комнаты для ${adtElement.offer.guests} гостей`, false);

      const time = querySelector('.popup__text--time');
      setAdt(time, adtElement.offer.checkin && adtElement.offer.checkout);
      setAdtElementContent(time,  `Заезд после ${adtElement.offer.checkin}, выезд до ${adtElement.offer.checkout}`, false);

      const features = querySelector('.popup__features');
      if (adtElement.popup.features) {
        const featuresPopup = adtElement.offer.features;
        setAdt(features, adtElement.offer.features, length);
      features.innerHTML = '';
      featuresPopup.forEach ((featurePopup) =>  {
        const featuresItem  = document.createElement('li');
        featuresItem.classList.add('popup__feature');
        featuresItem.classList.add(`popup__feature--${featurePopup}`);
        features.appendChild(featuresItem);
      });
    }

      const description = querySelector('.popup__description');
      setAdt(description, adtElement.offer.features);
      setAdtElementContent(description, adtElement.popup.description, false);

      const photos = querySelector('.popup__photos');
      setAdt(photos, adtElement.offer.photos, length);
      const templatePhotosGallery = popup.querySelector('.popup__photos');
      if (adtElements.offer.photos) {
        const photosPopup = adtElements.offer.photos;
        photos.innerHTML = '';
        photosPopup.forEach ((photoPopup) =>  {
          const photoItem = templatePhotosGallery.cloneNode(true);
          photoItem.src = photoPopup;
          photos.appendChild(photoItem); 
        });
      }

      const avatar = querySelector('.popup__avatar');
      setAdt(avatar, adtElement.autor.avatar);
      avatar.src = adtElement.autor.avatar;
      });

export {userTemplateFragment, housingType, setAdt, setAdtElementContent, createNewAdt};

