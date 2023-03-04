import React, { useState } from "react";

const DetailsHouseImage = ({ images }) => {
  //   console.log(images);
  const [number, setNumber] = useState(0);
  const imageHandle = (i) => {
    setNumber(i);
  };
  //   console.log(number);
  return (
    <div className="grid grid-cols-2">
      {images ? (
        <div className="grid grid-cols-1">
          {images.map((img, index) => (
            <img
              onClick={() => imageHandle(index)}
              className="w-24"
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
          className="w-60"
          src={`http://localhost:5000/${images?.[number]}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default DetailsHouseImage;
