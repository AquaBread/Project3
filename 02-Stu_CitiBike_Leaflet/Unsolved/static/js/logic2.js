// Create the tile layer that will be the background of our map.
const streetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
    }
  );
  
  // Init all the LayerGroups that we'll see
  let layer = {
    COMING_SOON: new L.LayerGroup(),
    EMPTY: new L.LayerGroup(),
    LOW: new L.LayerGroup(),
    NORMAL: new L.LayerGroup(),
    OUT_OF_ORDER: new L.LayerGroup(),
  }
  
  // Create the map with our layers
  let map = L.map("map-id",{
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [
      layers.COMING_SOON,
      layers.EMPTY,
      layers.LOW,
      layers.NORMAL,
      layers.OUT_OF_ORDER
    ]
  });
  
  // Add our tile layer to map
  streetMap.addTo(map);
  
  // Create an overlays object to add to the layer control
  let overlays = {
    "Coming Soon": layers.COMING_SOON,
    "Empty Stations": layerss.EMPTY,
    "Low Stations": layers.LOW,
    "Healthy Stations": layers.NORMAL,
    "Out of Order": layers.OUT_OF_ORDER
  };
  
  // Create a control for our layers, and add our overlays to it
  L.control.layers(null, overlays).addTo(map);
  
  // Create a legend to display info 
  let info = L.control({
    position: "bottomright"
  });
  
  // When the layer control is added, insert a div with the class of "legend"
  info.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    return div;
  };
  
  // Add the info legend to map
  info.addTo(map);
  
  // Init an object that contains icons for each layer group
  let icons = {
    COMING_SOON: L.ExtraMarkers.icon({
      icon: "ion-settings",
      iconColor: "white",
      markerColor: "yellow",
      shape: "star"
    }),
  }