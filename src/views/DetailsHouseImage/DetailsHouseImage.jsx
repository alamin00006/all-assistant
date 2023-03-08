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
              src={`https://all-assistant-server.onrender.com/${img}`}
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
          src={`https://all-assistant-server.onrender.com/${images?.[number]}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default DetailsHouseImage;
