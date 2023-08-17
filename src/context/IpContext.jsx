import { createContext } from "react";import { useEffect, useState } from "react";
import axios from "axios";
import { useMapEvent } from "react-leaflet";

const IpContext = createContext(null);

  
function IpProvider({ children }) {
    const [ipDetails, setIpDetails] = useState({
      ipData: {},
      isFetching: false,
      ipAddress: "",
      display: false,
      ipHeadings: ["IP Address", "Location", "Timezone", "ISP"],
    });

    const fetchIpDetails = async () => {
        console.log("Fetching");
      setIpDetails({ ...ipDetails, isFetching: true });
      let url = `${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${
        ipDetails.ipAddress
      }`;

      const response = await axios
        .create({
          baseURL: url,
        })
        .get("");

        console.log("Fetched");

      const ipResponse = response.data;
      console.log(ipResponse.location)

      setIpDetails({
        ...ipDetails,
        ipData: {
          "IP Address": ipResponse.domains.ip,
          Location: `${ipResponse.location.country}, ${ipResponse.location.region}, ${ipResponse.location.city}`,
          Timezone: ipResponse.location.timezone,
          coordinates: [ipResponse.location.lat, ipResponse.location.lng],
          ISP: ipResponse.domains.isp,
        },
        isFetching: false,
        display: true,
      });
      const map = useMapEvent("moveend", () => {
if (ipDetails.display) {
  map.flyTo(ipDetails.ipData.coordinates, 13);
}
      }); 
      map.flyTo(ipDetails.ipData.coordinates, 13);

      console.log(ipDetails);
    };
    return ( 
        <IpContext.Provider value={{ipDetails, setIpDetails, fetchIpDetails}}>
            {children}
            </IpContext.Provider>
     );
}

export default IpProvider;
export {IpContext};