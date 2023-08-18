import { useContext } from "react";
import { IpContext } from "../context/IpContext";

function IpHandler() {

  const { ipDetails, setIpDetails, fetchIpDetails } = useContext(IpContext);

  return (

    <div className="ip-handler absolute left-1/2 -translate-x-[50%] top-12 flex justify-center items-center flex-col z-10">
      {/* input for adding ip address of the user */}
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-[calc(80vw-3rem)] sm:w-[calc(60vw-3rem)] md:w-[calc(40vw-3rem)]"
            onChange={(e) =>
              setIpDetails({ ...ipDetails, ipAddress: e.target.value })
            }
          />
          <button className="btn btn-square" onClick={() => fetchIpDetails()}>
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
      {ipDetails.display&& (
        <div className="ip-details bg-white w-[80vw] sm:w-[60vw] md:w-[80vw] rounded-lg text-center py-6 mt-4 flex flex-col md:flex-row gap-4 z-10 md:justify-evenly divide-x-2">
          {ipDetails.ipHeadings.map((ipHeading) => (
            <div className="ip flex justify-start flex-col items-center w-full" key={ipHeading}>
              <h3 className="text-[12px] text-gray-600 ">
                {ipHeading.toUpperCase()}
              </h3>
              <p className="text-2xl font-semibold">{ipDetails.ipData[ipHeading] ?? ipDetails.ipAddress}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IpHandler;
