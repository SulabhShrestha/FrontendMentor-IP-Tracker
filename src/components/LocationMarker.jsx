import { Marker, Popup } from "react-leaflet";

function LocationMarker({ipDetails}) {
    debugger;
    return (
      <>
        {ipDetails.coordinates.length === 2 ? (
          <Marker position={ipDetails.coordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ) : (
          <></>
        )}
      </>
    );
}

export default LocationMarker;