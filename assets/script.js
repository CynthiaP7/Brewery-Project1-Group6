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
    })
    .catch(error => {
      console.error(error);
      alert("Failed to fetch brewery data.");
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
  
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", handleSearch);
  
    function handleSearch(event) {
      event.preventDefault();
      const searchInput = document.getElementById("search-input");
      const searchQuery = searchInput.value.trim().toLowerCase();
  
      if (searchQuery === "") {
        alert("Please enter a state.");
        return;
      }
  
      const filteredBreweries = breweries.filter(brewery => {
        const state = brewery.state.toLowerCase();
        return state.includes(searchQuery);
      });
  
      if (filteredBreweries.length === 0) {
        alert("No breweries found in this location.");
        return;
      }
  
      showBreweries(filteredBreweries);
      focusMap(filteredBreweries);
    }
  
    function showBreweries(breweries) {
      breweries.forEach(brewery => {
        try {
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
        } catch (error) {
          console.error(error);
          alert("No breweries found in this location.");
        }
      });
    }
  
    function focusMap(breweries) {
      if (breweries.length === 1) {
        const brewery = breweries[0];
        const position = { lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude) };
        map.setCenter(position);
        map.setZoom(15);
      } else {
        const bounds = new google.maps.LatLngBounds();
        breweries.forEach(brewery => {
          const position = { lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude) };
          bounds.extend(position);
        });
        map.fitBounds(bounds);
      }
    }

    var name = document.querySelector("#first-name");
    var email = document.querySelector("#email");
    var saveButton = document.getElementById("save");

    saveButton.addEventListener("click", function(event) {
      event.preventDefault();

    var subscriber = {
      subscriberName: name.value.trim(),
      subscriberEmail: email.value.trim(),
    }
    
    localStorage.setItem("subscriber", JSON.stringify(subscriber));
    console.log (subscriber);


    var allInputs = document.querySelectorAll('input');
allInputs.forEach(singleInput => singleInput.value = '');

  });



}
  
  


  
  
  







