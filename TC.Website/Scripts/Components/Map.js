// bigmap

function initialize1() {
    var styles = [
	  {
	      "stylers": [
                 { "visibility": "off" },

	      ]
	  }, {
	      "featureType": "landscape",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#23447c" }

	      ]
	  }, {
	      "featureType": "poi",
	      "stylers": [
            { "visibility": "simplified" },
            { "color": "#23447c" }

	      ]
	  }, {
	      "featureType": "water",
	      "stylers": [
            { "visibility": "simplified" },
            { "color": "#3a6cbe" }

	      ]
	  }, {
	      "featureType": "transit",
	      "stylers": [
            { "visibility": "simplified" },
            { "color": "#294d88" }

	      ]
	  }, {
	      "featureType": "road",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#3a6cbe" }

	      ]
	  }, {
	      "elementType": "labels.text.fill",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#ffffff" }

	      ]
	  }, {
	      "elementType": "labels.icon",
	      "stylers": [
            { "visibility": "off" }

	      ]
	  }, {
	      "featureType": "road",
	      "elementType": "labels",
	      "stylers": [
            { "visibility": "off" }
	      ]
	  }];
    var styledMap1 = new google.maps.StyledMapType(styles, {
        name: "Navigate"
    });
    var mapOptions = {
        streetViewControl: false,
        panControl: false,
        scaleControl: false,
        zoom: 11,
        center: new google.maps.LatLng(51.426065, -2.488543),
        zoomControl: false,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map_canvas1'), mapOptions);
    map.mapTypes.set('map_style', styledMap1);
    map.setMapTypeId('map_style');
    var image = '/Images/Maps/map-marker.png';
    var marker1 = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: image,
        position: new google.maps.LatLng(51.426765, -2.485843)
    });
}
google.maps.event.addDomListener(window, 'load', initialize1);


function initialize2() {
    var styles = [
	  {
	      "stylers": [
                 { "visibility": "off" },

	      ]
	  }, {
	      "featureType": "landscape",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#335ea6" }

	      ]
	  }, {
	      "featureType": "poi",
	      "stylers": [
            { "visibility": "simplified" },
            { "color": "#335ea6" }

	      ]
	  }, {
	      "featureType": "water",
	      "stylers": [
            { "visibility": "simplified" },
            { "color": "#5d8af2" }

	      ]
	  }, {
	      "featureType": "transit",
	      "stylers": [
            { "visibility": "on" }

	      ]
	  }, {
	      "featureType": "road",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#3a6cbe" }

	      ]
	  }, {
	      "elementType": "labels.text.fill",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#193b71" }

	      ]
	  }, {
	      "featureType": "road",
	      "elementType": "labels",
	      "stylers": [
            { "visibility": "off" }

	      ]
	  }, {
	      "featureType": "transit",
	      "elementType": "labels.text.fill",
	      "stylers": [
            { "visibility": "on" },
            { "color": "#ffffff" }

	      ]
	  }, {
	      "featureType": "transit",
	      "elementType": "labels.text.stroke",
	      "stylers": [
            { "visibility": "off" }
	      ]
	  }];
    var styledMap2 = new google.maps.StyledMapType(styles, {
        name: "Navigate"
    });
    var mapOptions = {
        streetViewControl: false,
        panControl: false,
        scaleControl: false,
        zoom: 15,
        center: new google.maps.LatLng(51.525188, -0.1390526),
        zoomControl: false,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map_canvas2'), mapOptions);
    map.mapTypes.set('map_style', styledMap2);
    map.setMapTypeId('map_style');
    var image = '/Images/Maps/map-marker.png';
    var marker2 = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: image,
        position: new google.maps.LatLng(51.525188, -0.1390526)
    });
}
google.maps.event.addDomListener(window, 'load', initialize2);