import React from "react";
//

import { choosesCategory } from "../../fakeData/chooseCategory";

const PropertyCategory = ({ handleCategory }) => {
  return (
    <div className="lg:mx-36 md:mx-26 sm:mx-16 xs:mx-0">
      <h1 className="text-center text-lg ">Select Your Property Category</h1>
      <div className="w-3/4 m-0 mx-auto ">
        <div class="md:grid md:grid-cols-3 gap-4 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-8 grid grid-cols-2 justify-items-center ">
          <div>
            <div className="avatar">
              {choosesCategory.map((category) => (
                <div
                  onClick={() => handleCategory(category.title)}
                  className="w-24 mask mask-squircle"
                >
                  <img src={category.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCategory;
