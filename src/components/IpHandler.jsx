function IpHandler() {
  const ipHeadings = [
    "IP Address",
    "Location",
    "Timezone",
    "ISP",
  ];

    return (
      <div className="ip-handler absolute left-1/2 -translate-x-[50%] top-12 flex justify-center items-center flex-col">
        {/* input for adding ip address of the user */}
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-[calc(80vw-3rem)] sm:w-[calc(60vw-3rem)] md:w-[calc(40vw-3rem)]"
            />
            <button className="btn btn-square">
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
        <div className="ip-details bg-slate-600 w-[80vw] sm:w-[60vw] md:w-[40vw] rounded-lg text-center py-6 mt-4">
          {ipHeadings.map((ipHeading) => (
            <div className="ip">
              <h3 className="text-sm text-gray-400">{ipHeading.toUpperCase()}</h3>
              <p>Something</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default IpHandler;
