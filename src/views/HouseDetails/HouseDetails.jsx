import React from "react";
import { useParams } from "react-router-dom";

const houses = [
  {
    id: "1",
    img: "https://res.cloudinary.com/bdassistant/image/upload/w_1000,ar_16:9,c_fill/wofkt2dkdqixbcjpztjx",
    taka: "22000",
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/bdassistant/image/upload/w_1000,ar_16:9,c_fill/sbrzwtrhkohlsnhbostl",
    taka: "23000",
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/bdassistant/image/upload/w_1000,ar_16:9,c_fill/pa2ckevjxzlymcrdue2s",
    taka: "24000",
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/bdassistant/image/upload/w_1000,ar_16:9,c_fill/xmwdlexxmjrvtqwld1b2",
    taka: "25000",
  },
];

const HouseDetails = () => {
  const { id } = useParams();

  const details = (id) => {
    const house = houses.find((hou) => hou.id === id);
    console.log(house);
  };
  details(id);
  //   console.log(houses);
  return <div>House Details</div>;
};

export default HouseDetails;
