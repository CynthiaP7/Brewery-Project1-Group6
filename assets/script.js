
// var x = document.getElementById("search");


// // function getLocation() {
// //   if (navigator.geolocation) {
// //     navigator.geolocation.getCurrentPosition(showPosition);
// //   } else {
// //     x.innerHTML = "Geolocation is not supported by this browser.";
// //   }
// // }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

// const brewLocation = 'https://api.openbrewerydb.org/v1/breweries';

//   fetch(brewLocation)
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data);
//     initMap(data);
//   })

//  // Initialize and add the map
// let map;

// async function initMap(breweries) {
//   // The location of New York
//   const position = { lat: 40.776, lng: -73.971 };
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 13,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at New York
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "New York",
//   });
//   var infoWindow = new google.maps.InfoWindow({
//     content:  "<p>Brewery Info Input</p>"
//   });
//   infoWindow.open(map, marker);
// }

// initMap();


  // //mapboxgl.accessToken = 'pk.eyJ1IjoiY2VlcDc4IiwiYSI6ImNsanhsem00YTAxaWEza3FlNGpoNGZxdDUifQ.-OEszcnYYKyOJyh4DNcC6A';
  // const map = new mapboxgl.Map({
  // container: 'map', // container ID
  // style: 'mapbox://styles/mapbox/streets-v12', // style URL
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 10, 
  // attributionControl: false
  // });
  const x = document.getElementById("search");

  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }
  
  const brewLocation = 'https://api.openbrewerydb.org/v1/breweries';
  
  fetch(brewLocation)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      initMap(data);
    });
  
  // Initialize and add the map
  let map;
  
  async function initMap(breweries) {
    const position = { lat: 40.776, lng: -73.971 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    map = new Map(document.getElementById("map"), {
      zoom: 13,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  
    breweries.forEach(brewery => {
      const marker = new google.maps.Marker({
        position: { lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude) },
        map: map,
        title: brewery.name,
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: `<p><strong>${brewery.name}</strong><br>${brewery.street}<br>${brewery.city}, ${brewery.state} ${brewery.postal_code}</p>`,
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  
  







