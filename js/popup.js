const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas');
const userTemplateFragment = document.querySelector('#card').content.querySelector('.popup');
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
  const popup = userTemplateFragment.cloneNode(true);

  const title = document.querySelector('.popup__title');
  setAdt(title, adtElement.offer.title);
  setAdtElementContent(title, adtElement.offer.title, false);

  const address = document.querySelector('.popup__text--address');
  setAdt(address, adtElement.offer.address);
  setAdtElementContent(address, adtElement.offer.address, false);

  const type = document.querySelector('.popup_type');
  setAdt(type, adtElement.offer.types);
  setAdtElementContent(type, getTypeHousesRussian(adtElement.offer.type), false);

  const price = document.querySelector('.popup__text--price');
  setAdt(price, adtElement.offer.price);
  setAdtElementContent(price, `${adtElement.offer.price} <span>₽/ночь</span>`, true);

  const capacity = document.querySelector('.popup__text--capacity');
  setAdt(capacity, adtElement.offer.rooms && adtElement.offer.guests);
  setAdtElementContent(capacity, `${adtElement.offer.rooms} комнаты для ${adtElement.offer.guests} гостей`, false);

  const time = document.querySelector('.popup__text--time');
  setAdt(time, adtElement.offer.checkin && adtElement.offer.checkout);
  setAdtElementContent(time,  `Заезд после ${adtElement.offer.checkin}, выезд до ${adtElement.offer.checkout}`, false);

  const avatar = document.querySelector('.popup__avatar');
  setAdt(avatar, adtElement.autor.avatar);
  avatar.src = adtElement.autor.avatar;

  const description = document.querySelector('.popup__description');
  setAdt(description, adtElement.offer.features);
  setAdtElementContent(description, adtElement.popup.description, false);

  const features = document.querySelector('.popup__features');
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

  const photos = document.querySelector('.popup__photos');
  const photosPopup = adtElement.offer.photos;
  const templatePhotosGallery = popup.querySelector('.popup__photos');

  setAdt(photos, photosPopup.length);
  photos.innerHTML = '';
  photosPopup.forEach ((photoPopup) =>  {
    const photoItem = templatePhotosGallery.cloneNode(true);
    photoItem.src = photoPopup;
    photos.appendChild(photoItem);
  });

  return popup;

});

mapCanvas.appendChild(createPromo[0]);

export {createPromo};

