var map, infoWindow;
window.winInitMap = initMap;

function initMap() {
  var houston = { lat: 29.7604, lng: -95.3698 };
  var mapDiv = document.getElementById("map");

  if (!mapDiv) {
    setTimeout(initMap, 500);
    return false;
  }

  map = new google.maps.Map(mapDiv, {
    center: houston,
    zoom: 12
  });

  // SearchBox
  // Create the search box and link it to the UI element.
  var input = document.getElementById("pac-input");
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", function() {
    searchBox.setBounds(map.getBounds());
  });
  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place

   searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for new location.
      markers.push(new google.maps.Marker({
        map: map,
        icon: pinImage,
        title: place.name,
        position: place.geometry.location
      }));

      // Crate new markers for surrounding vets
      var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location: place.geometry.location,
            radius: 10000,
            type: ["veterinary_care"]
          },
          processResults
        );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });


  // HTML5 geolocation.
  infoWindow = new google.maps.InfoWindow();
  if (navigator.geolocation) {
  console.log('INFOWINDOW')

    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);

        var pinColor = "0000ff";
        pinImage = new google.maps.MarkerImage(
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" +
            pinColor,
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34)
        );
        var marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          icon: pinImage,
          position: pos
        });

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location: pos,
            radius: 10000,
            type: ["veterinary_care"]
          },
          processResults
        );
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
}

function processResults(results, status, pagination) {
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    return;
  } else {
    // set window obj here
    window.googleMapInfo = results;
    // console.log('RESULTS:', googleMapInfo)
    $("#results-btn").click();
    createMarkers(results);

    if (pagination.hasNextPage) {
      var moreButton = document.getElementById("more");

      moreButton.disabled = false;

      moreButton.addEventListener("click", function() {
        moreButton.disabled = true;
        pagination.nextPage();
      });
    }
  }
}

function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById("places");

  for (var i = 0, place; (place = places[i]); i++) {
    var image = {
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      title: place.name,
      position: place.geometry.location
    });
    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}

function googleCheck() {
  if (!google) {
    setTimeout(googleCheck, 500);
    return false;
  }
  google.maps.event.addDomListener(window, "load", initMap);
}
