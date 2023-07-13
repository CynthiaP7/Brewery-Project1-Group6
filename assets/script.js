
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

const brewLocation = 'https://api.openbrewerydb.org/v1/breweries';

  fetch(brewLocation)
  .then(response => response.json())
  .then(data =>{
    console.log(data);
  })

 // Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();


  // //mapboxgl.accessToken = 'pk.eyJ1IjoiY2VlcDc4IiwiYSI6ImNsanhsem00YTAxaWEza3FlNGpoNGZxdDUifQ.-OEszcnYYKyOJyh4DNcC6A';
  // const map = new mapboxgl.Map({
  // container: 'map', // container ID
  // style: 'mapbox://styles/mapbox/streets-v12', // style URL
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 10, 
  // attributionControl: false
  // });

  






