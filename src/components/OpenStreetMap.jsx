import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Make sure you've imported the Leaflet CSS
import { IpContext } from "../context/IpContext";

function OpenStreetMap() {
    const {ipDetails} = useContext(IpContext);

    useEffect(() => {
        
    }, [ipDetails.ipData.coordinates]);

  return (
    <MapContainer
      center={ipDetails.ipData.coordinates ?? [51.09, -0.09]}
      zoom={13}
      dragging={true}
      className="h-2/3"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ipDetails.display && (
        <Marker position={ipDetails.ipData.coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default OpenStreetMap;
