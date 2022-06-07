app.factory('services_mapbox', ['services', '$rootScope', function (services, $rootScope) {
    let service = { init, addmark }
    return service;

    function init(container) {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlpbWFydGluZXoiLCJhIjoiY2t6eWZlYzk2MGIyOTJ2cDdxc2dmcDkxaSJ9.IhYesNObwvyMWu_nQQQoiw';
        map = new mapboxgl.Map({
            container: container, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-0.491254, 38.848895], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');
        return map;
    }

    function addmark(data, opt, map) {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            '<div class=popmark>' +
            '<img src="frontend/module/shop/view/productimg/' + data.img + '">' +
            '<h2>' + data.marca + ' ' + data.modelo + '</h2>' +
            '<h3>Precio: ' + data.precio + '</h3>' +
            '</div>'
        )
        if (opt == '0') {
    
            const popup1 = new mapboxgl.Popup({ offset: 25 }).setHTML(
                '<div class=popmark>' +
                '<img src="frontend/module/shop/view/productimg/' + data.img + '">' +
                '<h2>' + data.marca + ' ' + data.modelo + '</h2>' +
                '<h3>Precio: ' + data.precio + '</h3>' +
                '<a href="#/shop/'+data.id+'"><input type="button" class="data" id="' + data.id + '" value="View More" style="color: rgb(255, 110, 110)!important;"></input></a>' +
                '</div>'
            );
            marker = new mapboxgl.Marker()
                .setLngLat([data.lng, data.lat])
                .setPopup(popup1)
                .addTo(map);
    
        } else {
    
            marker = new mapboxgl.Marker()
                .setLngLat([data.lng, data.lat])
                .setPopup(popup)
                .addTo(map);
    
        }

    }

}]);