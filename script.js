var map;
var infoWindow;

function initMap() {
  var options = {
    zoom: 6,
    center: {
      lat: 53.35014,
      lng: -6.266155
    }
    // disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById("map"), options);

  var input = document.getElementById("search");
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed", function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];

  searchBox.addListener("places_changed", function() {
    var places = searchBox.getPlaces();

    // PRESENTING PICTURE OF THE DESTINATION
    let img =
      "<img src='" +
      places[0].photos[0].getUrl() +
      "' alt='location' class='img-fluid'/>";

    document.getElementById("images").innerHTML = img;

    // PRESENTING NAME OF THE DESTINATION
    document.getElementById("locationName").innerHTML = places[0].name;

    let location = {
      lat: places[0].geometry.location.lat(),
      lng: places[0].geometry.location.lng()
    };

    // GET DATA FROM THE DESIRED LOCATION
    getRestaurants(location);
    getHotels(location);

    if (places.length === 0) {
      return;
    }

    // RESET PREVOIUS MARKERS
    markers.forEach(function(m) {
      m.setMap(null);
    });
    markers = [];

    var bounds = new google.maps.LatLngBounds();

    places.forEach(function(p) {
      if (!p.geometry) return;

      markers.push(
        new google.maps.Marker({
          map: map,
          title: p.name,
          position: p.geometry.location
        })
      );

      if (p.geometry.viewport) {
        bounds.union(p.geometry.viewport);
      } else {
        bounds.extend(p.geometry.location);
      }
      map.fitBounds(bounds);
    });
  });
}
// FUNCTION TO GET RESTAURANTS IN THE AREA
function getRestaurants(location) {
  let targetLocation = new google.maps.LatLng(location.lat, location.lng);

  let request = {
    location: targetLocation,
    radius: "1500",
    type: ["restaurant"]
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
// FUNCTION TO GET HOTELS IN THE AREA
function getHotels(location) {
  let targetLocation = new google.maps.LatLng(location.lat, location.lng);

  let request = {
    location: targetLocation,
    radius: "1500",
    type: ["lodging"]
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callbackHotels);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    places = [];

    for (let i = 0; i < results.length; i++) {
      places.push(results[i]);
    }
    // PRESENTING MARKERS LABEL
    places.forEach(place => {
      let content = `<h4>${place.name}</h4>
        <p>${place.vicinity}</p>
        <h4>Rating: ${place.rating}</h4>`;

      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name,
        icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }
      });

      var infoWindow = new google.maps.InfoWindow({
        content: content
      });

      bindInfoWindow(marker, map, infoWindow, content);
      marker.setMap(map);
    });
  }

  function bindInfoWindow(marker, map, infoWindow, html) {
    marker.addListener("click", function() {
      infoWindow.setContent(html);
      infoWindow.open(map, this);
    });
  }

  // CREATING LISTING OF HOTELS
  let str = "<ul class='list-group list-group-flush'>";

  for (let i = 0; i < 5; i++) {
    str += "<li class='list-group-item'>" + places[i].name + "</li>";
  }
  str += "</ul>";

  document.getElementById("hotel-header").innerHTML =
    'Hotels <img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png" alt="Hotels">';
  document.getElementById("restaurants").innerHTML = str;
}

function callbackHotels(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    places = [];

    for (let i = 0; i < results.length; i++) {
      places.push(results[i]);
    }

    places.forEach(place => {
      let content = `<h3>${place.name}</h3>
          <p>${place.vicinity}</p>
          Rating: ${place.rating}`;

      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name,
        icon: { url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" }
      });

      var infoWindow = new google.maps.InfoWindow({
        content: content
      });

      bindInfoWindow(marker, map, infoWindow, content);
      marker.setMap(map);
    });
  }

  function bindInfoWindow(marker, map, infoWindow, html) {
    marker.addListener("click", function() {
      infoWindow.setContent(html);
      infoWindow.open(map, this);
    });
  }
  // CREATING LISTING OF RESTAURANTS
  let str = "<ul class='list-group list-group-flush'>";

  for (let i = 0; i < 5; i++) {
    str += "<li class='list-group-item'>" + places[i].name + "</li>";
  }
  str += "</ul>";

  document.getElementById("restaurant-header").innerHTML =
    'Restaurants <img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" alt="Restaurants">';
  document.getElementById("hotels").innerHTML = str;
}
