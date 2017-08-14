// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map, infoWindow;

function initMap() {
  var houston = { lat: 29.7604, lng: -95.3698 };

  map = new google.maps.Map(document.getElementById("map"), {
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

        infoWindow.setPosition(pos);
        infoWindow.setContent("⭐️");
        infoWindow.open(map);
        map.setCenter(pos);

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
      // url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      // icon: image,
      title: place.name,
      position: place.geometry.location
    });
    console.log("PLACE: ", place)
    placesList.innerHTML += "<li data-id='"+place.place_id+"'>" + place.name + " Rating: " +place.rating + "<a>"+"Check Prices"+"</a>"+"</li>";// use <Link>????

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);

  $("#places").on('click', 'li', function(e){
  let currentPlace = {
    vetName: $(this).text(),
    googleDataId: $(this).attr('data-id')
  }
  console.log('CURRENT: ',currentPlace)

  $.ajax({
    url: 'http://localhost:8080/api/vets/vetlist',
    data: currentPlace,
    method: 'POST'
  })
  .done(function(data){
    console.log('need to open dropdown with data', data)
  })


  console.log('CURRENT2: ',currentPlace)
})
}
google.maps.event.addDomListener(window, "load", initMap);

// TODO: move to reducer
// console.log('jQuery: ', jQuery)
// $(document).ready(function(){
//   console.log('PLACE J: ', $('#places'))

// });