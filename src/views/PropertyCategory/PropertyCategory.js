import React from "react";
//

import { choosesCategory } from "../../fakeData/chooseCategory";

const PropertyCategory = ({ handleCategory }) => {
  return (
    <div className="w-3/4 m-0 mx-auto ">
      <h1 className="text-center text-lg ">Select Your Property Category</h1>
      <div className="w-3/4 m-0 mx-auto ">
        <div>
          <div className="avatar grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5">
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
  );
};

export default PropertyCategory;
