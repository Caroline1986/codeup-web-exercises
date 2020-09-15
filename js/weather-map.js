(() => {
    'use strict';
    $(document).ready(() => {


$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OWM_key,
    q:     "San Antonio, US",
    units: "imperial",
   cnt: 6
}).done(function(data) {
    console.log(data);
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
        wf += "<p>" // Opening paragraph tag
        wf += "<b>Date: " + new Date(val.dt*1000) + "</b>: "
        wf += "<b>Day " + index + "</b>: " // Day
        wf += val.main.temp + "&degC" // Temperature
        wf += "<span> | " + val.weather[0].description + "</span>"; // Description
        wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
        wf += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForecast").html(wf);


});







//mapbox functions
        function geoCenter(search, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                }).then(function(data) {
                    return data.features[0].center;
                })
        };
        function geoSearch(search, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    return data.features[0]["center"];
                })
                .then(function(result) {
                    return [result[1], result[0]];
                });
        };
        function reverseGeoSearch(coordinates, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            var lng = coordinates[0];
            var lat = coordinates[1];
            return fetch(baseUrl + endPoint + lng + "," + lat + '.json' + "?" + 'access_token=' + token)
                .then(function(res) {
                    return res.json();
                })
                // to get all the data from the request, comment out the following three lines...
                .then(function(data) {
                    return data.features[0].place_name;
                });
        };
        //
        //mapbox vars
        mapboxgl.accessToken = mapboxToken;
        var mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v11',
            center: [-98.4936, 29.4241],
            zoom: 10
        };
        var markerOptions = {
            color: "#0040ff",
            draggable: true
        };
        const map = new mapboxgl.Map(mapOptions);
        const marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([-98.4936, 29.4241])
            .addTo(map);

        geoCenter("San Antonio, Texas", mapboxToken).then(result => {
            map.setCenter(result);
        });
        //function that fires first and renders all weather
        getWeather([29.4241, -98.4936]);
        //
        //centers map, adds trimmed location data to html, then updates marker, then updates weather
        $('#get-weather-button').click(function() {
            geoCenter($('#city-search-input').val(), mapboxToken).then(result => {
                map.setCenter(result);
                reverseGeoSearch(result, mapboxToken)
                    .then(result => {
                        let location = result.split(',')
                        while (location.length > 3) {
                            location.shift();
                        }
                        location = location.join(', ');
                        $('#location').html(location);
                    });
                marker.setLngLat(result);
            });
            geoSearch($('#city-search-input').val(), mapboxToken)
                .then(result => getWeather(result));
            $('#city-search-input').val('');
        });
        //update info based on new marker location
        marker.on('dragend', (function() {
            let lngLat = marker.getLngLat();
            let searchCoords = [lngLat['lat'], lngLat['lng']];
            getWeather(searchCoords);
            geoCenter([lngLat['lng'], lngLat['lat']], mapboxToken)
                .then(result => {
                    map.setCenter(result);
                    reverseGeoSearch(result, mapboxToken)
                        .then(result => {
                            let location = result.split(',')
                            while (location.length > 3) {
                                location.shift();
                            }
                            location = location.join(', ');
                            $('#location').html(location);
                        });
                });
        }));











// end
//
    });
    })();