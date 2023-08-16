import mobileImg from "../assets/pattern-bg-mobile.png";
import desktopImg from "../assets/pattern-bg-desktop.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";  
import markerIcon from "../components/markerIcon.jsx"

function Homepage() {
  // function getIPFromAmazon() {
  //   fetch("https://checkip.amazonaws.com/")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }
    
  return (
    <div className="homepage h-[100vh]">
      {/* location background image */}
      <div className="location-bg h-1/3 overflow-clip ">
        <div className="md:hidden h-full">
          <img
            src={mobileImg}
            alt="location background image"
            className="w-full bg-cover h-full"
            loading="lazy"
          />
        </div>

        <div className="hidden md:block h-full">
          <img
            src={desktopImg}
            alt="location background image"
            className="w-full bg-cover h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-2/3"
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
