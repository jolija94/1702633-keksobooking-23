const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas');
const userPopupTemplate = document.querySelector('#card').content.querySelector('.popup');

const housingTypes = {
  flat:'Квартира',
  bungalow:'Бунгало',
  house:'Дом',
  palace:'Дворец',
  hotel:'Отель',
};

const getTypeHousesRussian = (housingType) => housingTypes[housingType];

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

const createPromo = (createSomeAdt) => createSomeAdt.map((adtElement) => {
  const popup =  userPopupTemplate.cloneNode(true);

  const title = popup.querySelector('.popup__title');
  setAdt(title, adtElement.offer.title.textContent);
  setAdtElementContent(title, adtElement.offer.title, false);

  const address = popup.querySelector('.popup__text--address');
  setAdt(address, adtElement.offer.address.textContent);
  setAdtElementContent(address, adtElement.offer.address, false);

  const type = popup.querySelector('.popup_type');
  setAdt(type, adtElement.offer.types.textContent);
  setAdtElementContent(type, getTypeHousesRussian(adtElement.offer.type), false);

  const price = popup.querySelector('.popup__text--price');
  setAdt(price, adtElement.offer.price.textContent);
  setAdtElementContent(price, `${adtElement.offer.price} <span> ₽/ночь </span>`, false);

  const capacity = popup.querySelector('.popup__text--capacity').textContent;
  setAdt(capacity, adtElement.offer.rooms && adtElement.offer.guests);
  setAdtElementContent(capacity, `${adtElement.offer.rooms} комнаты для ${adtElement.offer.guests} гостей`, false);

  const time = popup.querySelector('.popup__text--time');
  setAdt(time, adtElement.offer.checkin && adtElement.offer.checkout);
  setAdtElementContent(time, ` Заезд после ${adtElement.offer.checkin.textContent}, выезд до ${adtElement.offer.checkout.textContent} `, false);

  const description = popup.querySelector('.popup__description');
  setAdt(description, adtElement.offer.features.textContent);
  setAdtElementContent(description, adtElement.popup.description, false);

  const avatar = popup.querySelector('.popup__avatar');
  setAdt(avatar, adtElement.autor.avatar);
  avatar.src = adtElement.autor.avatar;

  const features = popup.querySelectorAll('.popup__features');
  if (adtElement.offer.features) {
    const featuresPopup = adtElement.offer.features;
    setAdt(features, featuresPopup.length);
    features.innerHTML = '';
    featuresPopup.forEach((featurePopup) =>  {
      const featuresItem  = document.createElement('li');
      featuresItem.classList.add('popup__feature');
      featuresItem.classList.add(`popup__feature--${featurePopup}`);
      features.appendChild(featuresItem);
    });
  }

  const photoList = popup.querySelectorAll('.popup__photos');
  const templatePhotosGallery = popup.querySelector('.popup__photos');
  if (adtElement.offer.photos) {
    const photosPopup = adtElement.offer.photos;
    setAdt(photoList, photosPopup.length);
    photoList.innerHTML = '';
    photosPopup.forEach ((photoPopup) =>  {
      const photoItem = templatePhotosGallery.cloneNode(true);
      photoItem.src = photoPopup;
      photoList.appendChild(photoItem);
    });
  }
  return popup;
});

mapCanvas.appendChild();

export {createPromo, mapCanvas, map};
