import React from "react";
//

import { choosesCategory } from "../../fakeData/chooseCategory";

const PropertyCategory = ({ handleCategory }) => {
  return (
    <div className="w-3/4 m-0 mx-auto mt-6">
      <h1 className="text-center text-2xl ">Select Your Property Category</h1>
      <div className="w-3/4 m-0 mx-auto ">
        <div>
          <div className=" grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 my-4 ">
            {choosesCategory.map((category) => (
              <div className="flex flex-col justify-center items-center">
                <div
                  onClick={() => handleCategory(category.title)}
                  className="w-24 mask mask-squircle cursor-pointer"
                >
                  <img src={category.image} alt="" />
                </div>
                <p className="">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCategory;
