import mobileImg from "../assets/pattern-bg-mobile.png";
import desktopImg from "../assets/pattern-bg-desktop.png";

import OpenStreetMap from "../components/OpenStreetMap";

function Homepage() {
  // function getIPFromAmazon() {
  //   fetch("https://checkip.amazonaws.com/")
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }
    
  return (
    <div className="homepage h-[100vh] relative -z-10">
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
      <OpenStreetMap/>
    </div>
  );
}

export default Homepage;
