
var x = document.getElementById("search");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


  mapboxgl.accessToken = 'pk.eyJ1IjoiY2VlcDc4IiwiYSI6ImNsanhsem00YTAxaWEza3FlNGpoNGZxdDUifQ.-OEszcnYYKyOJyh4DNcC6A';
  const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, 
  });