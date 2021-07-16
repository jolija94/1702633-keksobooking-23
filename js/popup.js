import {createSomeAdt} from './data.js';

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas');
const userTemplateFragment = document.querySelector('#card').content.querySelector('.popup');
const popupFragment = document.createDocumentFragment();
const housingTypes = {
  flat:'Квартира',
  bungalow:'Бунгало',
  house:'Дом',
  palace:'Дворец',
  hotel:'Отель',
};

const getTypeHousesRussian = (housingType) => housingTypes[housingType];

const setAdt = (adtElement, visible) => {
  if (visible) {

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

createSomeAdt.map((adtElement) => {
  const popup = userTemplateFragment.cloneNode(true);

  const title = popup.querySelector('.popup__title');
  setAdt(title, adtElement.offer.title);
  setAdtElementContent(title, adtElement.offer.title, false);

  const address = popup.querySelector('.popup__text--address');
  setAdt(address, adtElement.offer.address);
  setAdtElementContent(address, adtElement.offer.address, false);

  const type = popup.querySelector('.popup__type');
  setAdt(type, adtElement.offer.types);
  setAdtElementContent(type, getTypeHousesRussian(adtElement.offer.type), false);

  const price = popup.querySelector('.popup__text--price');
  setAdt(price, adtElement.offer.price);
  setAdtElementContent(price, `${adtElement.offer.price} <span>₽/ночь</span>`, true);

  const capacity = popup.querySelector('.popup__text--capacity');
  setAdt(capacity, adtElement.offer.rooms && adtElement.offer.guests);
  setAdtElementContent(capacity, `${adtElement.offer.rooms} комнаты для ${adtElement.offer.guests} гостей`, false);

  const time = popup.querySelector('.popup__text--time');
  setAdt(time, adtElement.offer.checkin && adtElement.offer.checkout);
  setAdtElementContent(time,  `Заезд после ${adtElement.offer.checkin}, выезд до ${adtElement.offer.checkout}`, false);

  const avatar = popup.querySelector('.popup__avatar');
  setAdt(avatar, adtElement.author.avatar);
  avatar.src = adtElement.author.avatar;

  const description = popup.querySelector('.popup__description');
  setAdt(description, adtElement.offer.features);
  setAdtElementContent(description, adtElement.offer.description, false);

  const features = popup.querySelector('.popup__features');
  const featuresPopup = adtElement.offer.features;
  setAdt(features, featuresPopup && featuresPopup.length);
  if (featuresPopup) {
    features.innerHTML = '';
    featuresPopup.forEach((featurePopup) =>  {
      const featuresItem  = document.createElement('li');
      featuresItem.classList.add('popup__feature');
      featuresItem.classList.add(`popup__feature--${featurePopup}`);
      features.appendChild(featuresItem);
    });
  }

  const photos = popup.querySelector('.popup__photos');
  const photosPopup = adtElement.offer.features;
  setAdt(photos, photosPopup && photosPopup.length);

  if (photosPopup) {
    photos.innerHTML = '';
    adtElement.offer.photos.forEach((photo) => {
      const photoPopup  = document.createElement('img');
      photoPopup.classList.add('popup__photo');
      photoPopup.width = 45;
      photoPopup.height = 40;
      photoPopup.src = photo;
      photos.appendChild(photoPopup);
    });
  }

  popupFragment.appendChild(popup);
});

mapCanvas.appendChild(popupFragment);

