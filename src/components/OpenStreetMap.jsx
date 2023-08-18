import { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IpContext } from "../context/IpContext";
import LocationMarker from "./LocationMarker";

function OpenStreetMap() {
  const { ipDetails } = useContext(IpContext);

  return (
    <>
      {ipDetails.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <MapContainer
          className="h-2/3"
          center={
            ipDetails.coordinates.length === 0
              ? [50, 50]
              : ipDetails.coordinates
          }
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker ipDetails={ipDetails}/>
        </MapContainer>
      )}
    </>
  );
}



export default OpenStreetMap;
