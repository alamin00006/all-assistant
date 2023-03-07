import React from "react";
import story1 from "../../assets/images/bkash.png";
import story2 from "../../assets/images/rocket.png";
import story3 from "../../assets/images/nagod.png";
import story4 from "../../assets/images/bankasia.png";
import story5 from "../../assets/images/upay.png";

const Payment = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="text-center text-black text-3xl">Payment Systems</h1>
        <div className="grid grid-cols-2 md:grid md:grid-cols-3   lg:grid lg:grid-cols-5 gap-2 place-items-center my-4">
          <div>
            <img className="w-28" src={story1} alt="" />
          </div>
          <div>
            <img className="w-28" src={story2} alt="" />
          </div>
          <div>
            <img className="w-28" src={story3} alt="" />
          </div>
          <div>
            <img className="w-28" src={story4} alt="" />
            <p className="text-sm text-black">A/C : 1083313002962</p>
          </div>
          <div>
            <img className="w-28" src={story5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
