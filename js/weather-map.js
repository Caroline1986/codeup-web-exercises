(() => {
    'use strict';
    $(document).ready(() => {

//        shows weather based on city search
        const getWeather = function (lng, lat) {
            $("#get-weather-button").click(function () {
                var city = $("#city-search-input").val();
                // $.get("https://api.openweathermap.org/data/2.5/weather/", {
                //     dataType: "jsonp",
                //     jsonCallback: 'jsonp',
                //     cache: false,
                //     APPID: OWM_key,
                //     lon: lng,
                //     lat: lat,
                //     q: city,
                //     units: "imperial",
                //
                //
                // }).done(function (data) {
                //     console.log(data);
                // })
                $.get("http://api.openweathermap.org/data/2.5/forecast/", {
                    APPID: OWM_key,
                    lon: lng,
                    lat: lat,
                    q: city,
                    units: "imperial",


                }).done(function (data) {
                    console.log(data);

                    $("#showWeatherForecast").empty();
                    for (var i = 0; i <= data.list.length; i += 8) {
                        var date = (new Date(data.list[i].dt_txt.substring(0,10))).toDateString().substring(0,10);
                        var maxTemp = Math.round(data.list[i].main.temp_max);
                        var minTemp = Math.round(data.list[i].main.temp_min);
                        var description = data.list[i].weather[0].description;

                        var humidity = data.list[i].main.humidity;
                        var wind = data.list[i].wind.speed;
                        var wf = "";

                        wf +=
                            "<div class='card weatherCard'>\n" +
                            "<div class='card-body'>\n" +
                            "<h5>\n" + date + " </h5>\n" +
                            "<div>\n" + description + "</div>\n" +
                            "<img src='https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>\n" + // Icon
                            "<div>High: " + maxTemp + "°F / " + "Low: " +minTemp + "°F </div>\n" +
                            "<div>Humidity: " + humidity + "%</div>\n" +
                            "<div>Wind Speed: " + wind + " mph</div>\n" +
                            "</div>"


                        $('#showWeatherForecast').append(wf);

                    };
                });
            })
        }
//mapbox functions
            function geoCenter(search, token) {
                var baseUrl = 'https://api.mapbox.com';
                var endPoint = '/geocoding/v5/mapbox.places/';
                return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                    .then(function (res) {
                        return res.json();
                    }).then(function (data) {
                        return data.features[0].center;
                    })
            };

            function geoSearch(search, token) {
                var baseUrl = 'https://api.mapbox.com';
                var endPoint = '/geocoding/v5/mapbox.places/';
                return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (data) {
                        return data.features[0]["center"];
                    })
                    .then(function (result) {
                        return [result[1], result[0]];
                    });
            };

            function reverseGeoSearch(coordinates, token) {
                var baseUrl = 'https://api.mapbox.com';
                var endPoint = '/geocoding/v5/mapbox.places/';
                var lng = coordinates[0];
                var lat = coordinates[1];
                return fetch(baseUrl + endPoint + lng + "," + lat + '.json' + "?" + 'access_token=' + token)
                    .then(function (res) {
                        return res.json();
                    })

                    .then(function (data) {
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


            $('#get-weather-button').click(function () {
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
            marker.on('dragend', (function () {
                let lngLat = marker.getLngLat();
                let searchCoords = [lngLat['lat'], lngLat['lng']];
                console.log(searchCoords)
                // getWeather(searchCoords);

                var latitude = lngLat.lat;
                var longitude = lngLat.lng;
                $.get("http://api.openweathermap.org/data/2.5/forecast/", {
                    APPID: OWM_key,
                    lon: longitude,
                    lat: latitude,
                    // q: city,
                    units: "imperial",
                    cnt: 6,

                }).done(function (data) {
                    console.log(data);

                    $("#showWeatherForecast").empty();
                    for (var i = 0; i <= data.list.length; i += 8) {
                        var date = data.list[i].dt_txt;
                        var maxTemp = Math.round(data.list[i].main.temp_max);
                        var minTemp = Math.round(data.list[i].main.temp_min);
                        var description = data.list[i].weather[0].description;

                        var humidity = data.list[i].main.humidity;
                        var wind = data.list[i].wind.speed;
                        var wf = "";

                        wf +=
                            "<div class='card weatherCard justify-content-center'>\n" +
                            "<div class='card-body'>\n" +
                            "<h5 class='card-header'>\n" + date + " </h5>\n" +
                            "<div>\n" + description + "</div>\n" +
                            "<img src='https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>\n" + // Icon
                            "<div>High: " + maxTemp + "°F / " + "Low: " +minTemp + "°F </div>\n" +
                            "<div>Humidity: " + humidity + "%</div>\n" +
                            "<div>Wind Speed: " + wind + " mph</div>\n" +
                            "</div>"

                        $('#showWeatherForecast').append(wf);

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
                                        console.log(location)
                                    });
                            });
                    };
                });
            }));




// end
//
    });
    })();