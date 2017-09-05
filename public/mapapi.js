var map, infoWindow;

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

  // HTML5 geolocation.
  infoWindow = new google.maps.InfoWindow();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // infoWindow.setPosition(pos);
        // infoWindow.setContent("⭐️");
        // infoWindow.open(map);
        map.setCenter(pos);

        var pinColor = "0000ff";
        var pinImage = new google.maps.MarkerImage(
          "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" +
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
