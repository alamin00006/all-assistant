import React from "react";
import mobileApp from "../../assets/images/App_First_Screen-01_zlkeax.png";
import googlePlayStore from "../../assets/images/google-play_gksojj.png";
const MobileApp = () => {
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col items-center lg:justify-center  sm:justify-center xs:justify-center ">
        <div>
          <img
            className="lg:w-[190px] lg:h-[380px] md:h-[350px] sm:h-10 xs:h-10 md:w-[190px] sm:w-[173px] sm:h-[380px] xs:w-[200px] xs:h-[380px]"
            src={mobileApp}
            alt=""
          />
        </div>
        <div className="text-black ml-16  ">
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
