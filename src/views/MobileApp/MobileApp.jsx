import React from "react";
import mobileApp from "../../assets/images/mobile.png";
import googlePlayStore from "../../assets/images/google-play_gksojj.png";
const MobileApp = () => {
  return (
    <div className="mt-10">
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col items-center lg:justify-center  sm:justify-center xs:justify-center md:justify-center">
        <div>
          <img
            src={mobileApp}
            className="lg:w-[190px] lg:h-[380px] md:w-[190px] md:h-[380px] sm:w-[190px] sm:h-[380px] xs:w-[190px] xs:h-[380px]"
            alt=""
          />
        </div>
        <div className="text-black ml-16">
          <h2 className="text-2xl text-orange-400">
            Book an assistant by two minutes
          </h2>
          <p className="mt-10">Download our app</p>
          <p>for exclusive offers and ease of ordering services</p>
          <img
            style={{ width: "180px" }}
            src={googlePlayStore}
            className="mt-16"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
