import L from "leaflet";
import icon from "../assets/icon-location.svg";

const markerIcon = new L.Icon({
  iconUrl: icon,

  iconSize: [38, 65], // size of the icon
  
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76],
});

export default markerIcon;
