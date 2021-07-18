import {toggleDisabledPage} from './form.js';
import {createPopups} from './popup.js';
import {createSomeAdt} from './data.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    toggleDisabledPage(false);
  })
  .setView({
    lat: 35.68352,
    lng: 139.75245,
  }, 12 );
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.68352,
    lng: 139.75245,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(5);
  const lng = userCoordinate.lng.toFixed(5);
  address.value = `${lat},  ${lng}`;
});

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainMarker.setLatLng({
    lat: 35.68352,
    lng: 139.75245,
  });
  map.setView({
    lat: 35.68352,
    lng: 139.75245,
  }, 16);
});

createSomeAdt.forEach((createAdt, index) => {
  const lat = createAdt.location.lat;
  const lng = createAdt.location.lng;
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
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
  marker.addTo(map).bindPopup(createPopups[index],{keepInView: true});
});
