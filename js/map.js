import {clearForm} from './form.js';
import {createPopups} from './popup.js';
import {MAX_ADVERTS_COUNT} from './data.js';
import {disablePage, enableForm} from './page.js';

const address = document.querySelector('#address');

const TOKYO_LAT_LNG = {
  lat: 35.68352,
  lng: 139.75245,
};
const MAP_ZOOM = 12;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const ICON_SIZE = [40, 40];
const ICON_ANCHOR = [20, 40];
const ACCURACY = 5;

disablePage();

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
  })
  .setView(TOKYO_LAT_LNG, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
});

const mainMarker = L.marker(
  TOKYO_LAT_LNG,
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

const setDefaultMarkerState = () => {
  const newLatLng = new L.LatLng(TOKYO_LAT_LNG.lat, TOKYO_LAT_LNG.lng);
  mainMarker.setLatLng(newLatLng);
  map.setView(TOKYO_LAT_LNG, MAP_ZOOM);
};

const setAddressValue = (lat, lng) => {
  address.value = `${lat.toFixed(ACCURACY)}, ${lng.toFixed(ACCURACY)}`;
};

mainMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  setAddressValue(userCoordinate.lat, userCoordinate.lng)
});

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
});

const markerGroup = L.layerGroup().addTo(map);

const renderAdverts = (adverts) => {
  const advertsLimited = adverts.slice(0, MAX_ADVERTS_COUNT);
  const popups = createPopups(advertsLimited);

  advertsLimited.forEach((advert, index) => {
    const lat = advert.location.lat;
    const lng = advert.location.lng;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR,
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker.addTo(markerGroup).bindPopup(popups[index], {keepInView: true});
  });
};

const clearLayers = () => {
  markerGroup.clearLayers();
};

setAddressValue(TOKYO_LAT_LNG.lat, TOKYO_LAT_LNG.lng);

export {renderAdverts, setDefaultMarkerState, clearLayers, setAddressValue, TOKYO_LAT_LNG};

