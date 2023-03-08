import React, { useState } from "react";

const DetailsHouseImage = ({ images }) => {
  //   console.log(images);
  const [number, setNumber] = useState(0);
  const imageHandle = (i) => {
    setNumber(i);
  };
  //   console.log(number);
  return (
    <div className="relative ">
      {images ? (
        <div className="flex">
          {images.map((img, index) => (
            <img
              onClick={() => imageHandle(index)}
              className="w-24 mr-2"
              key={index}
              src={`http://localhost:5000/${img}`}
              alt=""
            />
          ))}
        </div>
      ) : (
        <></>
      )}
      <div>
        <img
          className="w-full h-full mt-2 relative"
          src={`http://localhost:5000/${images?.[number]}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default DetailsHouseImage;
