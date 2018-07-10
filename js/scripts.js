var mymap = L.map('map').setView([40.774659,-73.907518], 14);

L.tileLayer('https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

console.log(AMIData);

function getColor(i) {
  return i > 80000 ? '#1ad861' :
      i > 70000  ? '#59db8a' :
      i > 60000  ? '#93d6ac' :
      i > 50000  ? '#e8cd6d' :
      i > 40000   ? '#d8a0a0' :
      i > 30000   ? '#ce6b6b' :
      i > 20000   ? '#ce3131' :
            '#d1d1d1';
}

function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.ACS_Medi_3)
  };
}

function highlightFeature(e) {
    var AMIlayer = e.target;

    AMIlayer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        AMIlayer.bringToFront();
    }
}

function resetHighlight(e) {
    AMIlayer.resetStyle(e.target);
}

// function zoomToFeature(e) {
//     map.fitBounds(e.target.getBounds());
// }

function onEachFeature(feature, AMIlayer) {
    AMIlayer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        // click: zoomToFeature
    });
}

var AMIData = L.geoJSON (CD22AMI, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(mymap);

var CD22Boundary = L.geoJSON (CD22, {
  fillColor: "#c13432",
  fillOpacity: .5,
  weight: 1,
  color: "#c13432",
}).addTo(mymap);
