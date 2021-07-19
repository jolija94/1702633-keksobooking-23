import {toggleDisabledPage} from './form.js';
import {creationPopups} from './popup.js';

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

const map = L.map('map-canvas')
  .on('load', () => {
    toggleDisabledPage(false);
  })
  .setView(TOKYO_LAT_LNG, MAP_ZOOM );

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

mainMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(ACCURACY);
  const lng = userCoordinate.lng.toFixed(ACCURACY);
  address.value = `${lat},  ${lng}`;
});

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainMarker.setLatLng(TOKYO_LAT_LNG);
  map.setView(TOKYO_LAT_LNG, MAP_ZOOM);
});

const createServerAdt  = (creationSomeAdt) => {
  creationSomeAdt.forEach((creationAdt, index) => {
    const lat = creationAdt.location.lat;
    const lng = creationAdt.location.lng;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR,
    });

    const marker = L.marker (
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker.addTo(map).bindPopup(creationPopups[index],{keepInView: true});
  });
};

const markerGroup = L.layerGroup().addTo(map);

const createAdtMap = (data) => {
  data.forEach((objectPromo) => {
    createServerAdt(objectPromo.avatar, objectPromo.offer, objectPromo.location);

  });
};

address.setAttribute('value', `${TOKYO_LAT_LNG.lat}, ${TOKYO_LAT_LNG.lng}`);

export {createServerAdt, createAdtMap, markerGroup };
