import React from "react";
import partner1 from "../../assets/images/young-bangla_fceuzk.png";
import partner2 from "../../assets/images/brac_xfzeuk.png";
import partner3 from "../../assets/images/ygap_hatw9g.png";
import partner4 from "../../assets/images/youthcolab_ql5lcg.png";

const OurPartners = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-black">Our Partners</h1>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3   lg:grid lg:grid-cols-4 gap-2 place-items-center my-4">
        <div>
          <img className="w-72" src={partner1} alt="" />
        </div>
        <div>
          <img className="w-72" src={partner2} alt="" />
        </div>
        <div>
          <img className="w-72" src={partner3} alt="" />
        </div>
        <div>
          <img className="w-72" src={partner4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
