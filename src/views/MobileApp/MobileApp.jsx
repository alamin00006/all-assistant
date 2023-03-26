import React from "react";
import mobileApp from "../../assets/images/App_First_Screen-01_zlkeax.jpeg";
import googlePlayStore from "../../assets/images/google-play_gksojj.png";
import { Link } from "react-router-dom";
const MobileApp = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-center mb-14">
        <h1 className="text-center text-black font-bold text-2xl border-b-4 border-black">
          OUR MOBILE APP
        </h1>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col items-center lg:justify-center  sm:justify-center xs:justify-center md:justify-center">
        <div>
          <Link to="/comming-soon">
            <img
              src={mobileApp}
              className="lg:w-[190px] lg:h-[380px] md:w-[190px] md:h-[380px] sm:w-[190px] sm:h-[380px] xs:w-[190px] xs:h-[380px]"
              alt=""
            />
          </Link>
        </div>
        <div className="text-black ml-16">
          <h2 className="text-2xl text-orange-400">
            Book an assistant by two minutes
          </h2>
          <p className="mt-10">Download our app</p>
          <p>for exclusive offers and ease of ordering services</p>
          <Link to="/comming-soon">
            <img
              style={{ width: "180px" }}
              src={googlePlayStore}
              className="mt-16"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
