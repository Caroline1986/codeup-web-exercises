mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.598812, 29.523657],
    zoom: 10
});
var restaurants = [
    {
        name: "Mis Padres",
        coordinates: [-98.5981, 29.4893],
        info: "Full of Love"

    },
    {
        name: "Los Barrios",
        coordinates: [-98.508210, 29.485860],
        info: "Full of Tacos"
    },
    {
        name: "Pho Sure",
        coordinates: [-98.598812, 29.523657],
        info: "Full of Tofu"
    }
]

function restaurantMarkers(restaurantList){
    restaurantList.forEach(function (restaurant) {
        new mapboxgl.Marker()
            .setLngLat(restaurant.coordinates)
            .addTo(map)
    })
}

restaurants.forEach(function(restaurant) {
    console.log('In the forEach: ', restaurant);
    // the  geocode method from mapbox-geocoder-utils.js
    geocode(restaurant.address, mapboxToken).then(function(result) {
        var popup = new mapboxgl.Popup()
            .setHTML(restaurant.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map)
            .setPopup(popup);

    });
});