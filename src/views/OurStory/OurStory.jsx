import React from "react";
import story1 from "../../assets/images/story01.jpg";
import story2 from "../../assets/images/story02.png";
import story3 from "../../assets/images/story03.png";
import story4 from "../../assets/images/thedailystar.png";

const OurStory = () => {
  return (
    <div>
      <h1 className="text-center text-black">Our Story</h1>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3   lg:grid lg:grid-cols-4 gap-2 place-items-center my-4">
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
        </div>
      </div>
    </div>
  );
};

export default OurStory;
