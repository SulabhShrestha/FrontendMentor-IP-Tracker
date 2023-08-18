import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const IpContext = createContext(null);

function IpProvider({ children }) {
  const [ipDetails, setIpDetails] = useState({
    ipData: {},
    isFetching: false,
    ipAddress: "",
    display: false,
    coordinates: [],
    ipHeadings: ["IP Address", "Location", "Timezone", "ISP"],
  });

  // Fetching data from the API
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
    console.log(ipResponse);

    setIpDetails({
      ...ipDetails,
      ipData: {
        "IP Address": ipResponse.ip,
        Location: `${ipResponse.location.country}, ${ipResponse.location.region}, ${ipResponse.location.city}`,
        Timezone: ipResponse.location.timezone,
        ISP: ipResponse.isp,
      },
      coordinates: [ipResponse.location.lat, ipResponse.location.lng],
      isFetching: false,
      display: true,
    });

    console.log(ipDetails);
  };
  return (
    <IpContext.Provider value={{ ipDetails, setIpDetails, fetchIpDetails }}>
      {children}
    </IpContext.Provider>
  );
}

export default IpProvider;
export { IpContext };
