import {HousingTypes} from './data.js';

const userTemplateFragment = document.querySelector('#card').content.querySelector('.popup');

const setAdvertVisibility = (advert, visible) => {
  if (visible) {

    advert.classList.remove('hidden');
    return;
  }
  advert.classList.add('hidden');
};

const setAdvertContent = (advert, content, isHtml) => {
  if (isHtml) {
    advert.innerHTML = content;
    return;
  }
  advert.textContent = content;
};

const createPopups = (someAdtArray) =>
  someAdtArray.map((advert) => {
    const popup = userTemplateFragment.cloneNode(true);

    const title = popup.querySelector('.popup__title');
    setAdvertVisibility(title, advert.offer.title);
    setAdvertContent(title, advert.offer.title, false);

    const address = popup.querySelector('.popup__text--address');
    setAdvertVisibility(address, advert.offer.address);
    setAdvertContent(address, advert.offer.address, false);

    const type = popup.querySelector('.popup__type');
    setAdvertVisibility(type, advert.offer.type);
    setAdvertContent(type, HousingTypes[advert.offer.type], false);

    const price = popup.querySelector('.popup__text--price');
    setAdvertVisibility(price, advert.offer.price);
    setAdvertContent(price, `${advert.offer.price} <span>₽/ночь</span>`, true);

    const capacity = popup.querySelector('.popup__text--capacity');
    setAdvertVisibility(capacity, advert.offer.rooms && advert.offer.guests);
    setAdvertContent(capacity, `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`, false);

    const time = popup.querySelector('.popup__text--time');
    setAdvertVisibility(time, advert.offer.checkin && advert.offer.checkout);
    setAdvertContent(time, `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`, false);

    const avatar = popup.querySelector('.popup__avatar');
    setAdvertVisibility(avatar, advert.author.avatar);
    avatar.src = advert.author.avatar;

    const description = popup.querySelector('.popup__description');
    setAdvertVisibility(description, advert.offer.features);
    setAdvertContent(description, advert.offer.description, false);

    const features = popup.querySelector('.popup__features');
    const featuresPopup = advert.offer.features;
    setAdvertVisibility(features, featuresPopup && featuresPopup.length);
    if (featuresPopup && featuresPopup.length) {
      features.innerHTML = '';
      featuresPopup.forEach((featurePopup) => {
        const featuresItem = document.createElement('li');
        featuresItem.classList.add('popup__feature');
        featuresItem.classList.add(`popup__feature--${featurePopup}`);
        features.appendChild(featuresItem);
      });
    }

    const photos = popup.querySelector('.popup__photos');
    const photosPopup = advert.offer.photos;
    setAdvertVisibility(photos, photosPopup && photosPopup.length);

    if (photosPopup && photosPopup.length) {
      photos.innerHTML = '';
      advert.offer.photos.forEach((photo) => {
        const photoPopup = document.createElement('img');
        photoPopup.classList.add('popup__photo');
        photoPopup.width = 45;
        photoPopup.height = 40;
        photoPopup.src = photo;
        photos.appendChild(photoPopup);
      });
    }
    return popup;
  });

export {createPopups};

