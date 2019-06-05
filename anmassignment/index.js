var north, south, east, west;
var markers = [];
function initMap() {
    //map initialization, this map is used for every marker and infowindow
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

//Function that uses the geocoder API to get the bounding box of the input city
function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            console.log(results[0].geometry.viewport);
            resultsMap.setCenter(results[0].geometry.location);
            resultsMap.setZoom(9);
            north = results[0].geometry.viewport.na.l;
            south = results[0].geometry.viewport.na.j;
            east = results[0].geometry.viewport.ga.l;
            west = results[0].geometry.viewport.ga.j;


            getEarthquakes(resultsMap);
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

//Function to get the earthquakes of the input city.
//Generates a new marker for every earthquake. Deletes markers when looking for another city
function getEarthquakes(map) {
    if(markers.size != 0) {
        deleteMarkers();
    }
    $.ajax({
        method: 'GET',
        url: 'http://api.geonames.org/earthquakesJSON?north='+north+'&south='+south+'&east='+east+'&west='+west+'&username=antonaldinho',
        dataType: 'jsonp'
    }).done(function(response) {
        if(response.earthquakes.length == 0) {
            M.toast({html: 'No earthquakes found'});
        }
        else {
            response.earthquakes.forEach(function(earthquake) {
                var position = {
                    lat: earthquake.lat,
                    lng: earthquake.lng
                }
                var date = earthquake.datetime.substring(0, earthquake.datetime.indexOf(" "));
                var time = earthquake.datetime.substring(earthquake.datetime.indexOf(" "));
                console.log(position);
                var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h4 id="firstHeading" class="firstHeading">Earthquake info</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Date: </b>'+
                date +
                '<p><b>Time: </b>'+
                time +
                '<p><b>Magnitude: </b>'+
                earthquake.magnitude +
                '<p><b>Latitude: </b>'+
                position.lat +
                '<p><b>Longitude: </b>'+
                position.lng +
                '</div>'+
                '</div>';
    
                addMarker(position, map, contentString);
            });
        }
    }).fail(function(reason) {
        console.log(reason);
    });
}

// Function to add markers
function addMarker(location, map, infoString) {
    var infoWindow = new google.maps.InfoWindow({
        content: infoString
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Earthquake info'
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}

// Function to unset the map in all markers
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array
function clearMarkers() {
    setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them
function deleteMarkers() {
    clearMarkers();
    markers = [];
}