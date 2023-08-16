import mobileImg from "../assets/pattern-bg-mobile.png";
import desktopImg from "../assets/pattern-bg-desktop.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";  
import markerIcon from "../components/markerIcon.jsx"

function Homepage() {
    
  return (
    <div className="homepage h-[100vh]">
      {/* location background image */}
      <div className="location-bg h-2/5 overflow-clip">
        <div className="md:hidden">
          <img
            src={mobileImg}
            alt="location background image"
            className="w-full"
          />
        </div>

        <div className="hidden md:block">
          <img
            src={desktopImg}
            alt="location background image"
            className="w-full"
          />
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-3/5"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* icon={markerIcon} add this for custom icon, but default feels more 3d */}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Homepage;
