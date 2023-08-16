import { useState } from "react";

function IpHandler() {
  const ipHeadings = ["IP Address", "Location", "Timezone", "ISP"];

  const [ipDetails, setIpDetails] = useState({
    ipData: {},
    isFetching: false,
    ipAddress: "",
  });

  const fetchIpDetails = async () => {
    setIpDetails({ ...ipDetails, isFetching: true });
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_IPIFY_API_KEY
    }&ipAddress=${ipDetails.ipAddress}`;

    console.log(url)

    // const response = await fetch(url);
    // const data = await response.json();
    // setIpDetails({ ipData: data, isFetching: false });
  };

  https: return (
    <div className="ip-handler absolute left-1/2 -translate-x-[50%] top-12 flex justify-center items-center flex-col">
      {/* input for adding ip address of the user */}
      <div className="form-control">
        <div className="input-group">
          <input
            type="number"
            placeholder="Search…"
            className="input input-bordered w-[calc(80vw-3rem)] sm:w-[calc(60vw-3rem)] md:w-[calc(40vw-3rem)]"
            onChange={(e) => setIpDetails({...ipDetails, ipAddress: e.target.value})}
          />
          <button className="btn btn-square" onClick={( )=> fetchIpDetails()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ip address details */}
      {ipDetails.ipData && (
        <div className="ip-details bg-white w-[80vw] sm:w-[60vw] md:w-[40vw] rounded-lg text-center py-6 mt-4 flex flex-col gap-4">
          {ipHeadings.map((ipHeading) => (
            <div className="ip">
              <h3 className="text-[12px] text-gray-600 ">
                {ipHeading.toUpperCase()}
              </h3>
              <p className="text-2xl font-semibold">Something</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IpHandler;
