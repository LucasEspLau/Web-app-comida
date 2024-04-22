export function loadMap(position) {
    var miUbicacion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: miUbicacion
    });

    // Resto de tu código para dibujar el círculo y los marcadores de cocineros
    // ...

    // Convertir el marcador de usuario en arrastrable
    markerUsuario = new google.maps.Marker({
        position: miUbicacion,
        map: map,
        draggable: true,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4285F4",
            fillOpacity: 1,
            strokeWeight: 0
        }
    });
}

export function handleLocationError(browserHasGeolocation) {
    var defaultPosition = { lat: -12.102055, lng: -76.870109 }; // Posición por defecto

    if (typeof map === 'undefined') {
        map = new google.maps.Map(document.getElementById('map'), {
            center: defaultPosition,
            zoom: 15
        });
    }

    markerUsuario = new google.maps.Marker({
        position: defaultPosition,
        map: map,
        draggable: true
    });

    var content = browserHasGeolocation ? 
                'Error: El servicio de Geolocalización falló.' : 
                'Error: Tu navegador no soporta Geolocalización.';
    var infoWindow = new google.maps.InfoWindow({ map: map, position: defaultPosition, content: content });
}

export function searchCooks(location) {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
    // Crear un círculo en el mapa para mostrar el rango de búsqueda
    var searchRangeCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: location,
        radius: 100  // Radio en metros
    });

    // Hacer que el círculo desaparezca después de 3 segundos
    setTimeout(function() {
        searchRangeCircle.setMap(null);
    }, 3000);

    // Lógica para buscar cocineros cerca de la ubicación confirmada
    console.log('Buscar cocineros cerca de:', location.toString());


    var ubicacionesCocineros = [
    {lat: -12.102055, lng: -76.870109},
    {lat: -12.103822, lng: -76.869691},
    {lat: -12.103403, lng: -76.872067}
    ];
    // Implementa la lógica de búsqueda aquí

    var radioBusqueda = 100; // Radio en metros

    ubicacionesCocineros.forEach(function(ubicacionCocinero) {
        var distance = google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng(location), 
            new google.maps.LatLng(ubicacionCocinero)
        );

        if (distance <= radioBusqueda) {
            var marker = new google.maps.Marker({
                position: ubicacionCocinero,
                map: map,
                title: "Cocinero"
            });

            markers.push(marker); // Guardar el marcador en el array
        }
    });
}