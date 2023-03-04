import React from "react";
import HotelRecentProperties from "../HotelRecentProperties/HotelRecentProperties";
import HotelSearchOption from "../HotelSearchOption/HotelSearchOption";

const Hotel = () => {
  return (
    <div>
      <h1>This is a hotel Route</h1>
      <HotelSearchOption></HotelSearchOption>
      <HotelRecentProperties></HotelRecentProperties>
    </div>
  );
};

export default Hotel;
