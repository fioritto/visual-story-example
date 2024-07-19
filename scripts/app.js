// Write your code!
console.log('Hello bakers');

// Import dependencies
import * as L from 'leaflet';

// Import data
import homicides from '../_data/homicides.json';

// Set the id of the div on the page where the map will go
const divId = 'map';

// Create the map
const map = L.map(divId, {
  scrollWheelZoom: false,
});

// Add a satellite layer
L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
  {
    minZoom: 13,
  }
).addTo(map);

// Set the center and zoom
map.setView([41.79955, -87.596739], 15);

// Load the data
homicides.forEach((obj) => {
  L.circleMarker([obj.LATITUDE, obj.LONGITUDE]) // As a pin ...
    .addTo(map)
    .bindTooltip(
      obj.HOMICIDE_VICTIM_FIRST_NAME + ' ' + obj.HOMICIDE_VICTIM_LAST_NAME
    ); // ... with a tooltip
});
