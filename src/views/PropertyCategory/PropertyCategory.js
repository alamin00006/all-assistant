import React from "react";
import img1 from "../../assets/Property category/bachelor.png";
import img2 from "../../assets/Property category/community-center.png";
import img3 from "../../assets/Property category/family.png";
import img4 from "../../assets/Property category/flat4sale.png";
import img5 from "../../assets/Property category/hotel.png";
import img6 from "../../assets/Property category/house.png";
import img7 from "../../assets/Property category/mess-hostel.png";
import img8 from "../../assets/Property category/office-space.png";

const PropertyCategory = () => {
  return (
    <div>
      <h1 className="text-center text-lg ">Select Your Property Category</h1>
      <div className="w-3/4 m-0 mx-auto ">
        <div class="md:grid md:grid-cols-3 gap-4 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-8 grid grid-cols-2 justify-items-center ">
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img6} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img7} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="avatar">
                <div className="w-24 mask mask-squircle">
                  <img src={img8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCategory;
