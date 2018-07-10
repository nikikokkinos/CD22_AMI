var mymap = L.map('map').setView([40.774659,-73.907518], 14);

L.tileLayer('https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var AMIData = L.geoJSON (CD22AMI, {
  fillColor: "#c13432",
  fillOpacity: .5,
  weight: 1,
  color: "#c13432",
}).addTo(mymap);

var CD22Boundary = L.geoJSON (CD22, {
  fillColor: "#c13432",
  fillOpacity: .5,
  weight: 1,
  color: "#c13432",
}).addTo(mymap);
