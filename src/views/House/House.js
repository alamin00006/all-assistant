import React from "react";
import PropertyCategory from "../PropertyCategory/PropertyCategory";
import  { useEffect, useState } from "react";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);

  useEffect(() => {
    fetch("bd-division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data.divisions));
  }, []);

  return (
    <div>
      <h2>House Page</h2>
      <PropertyCategory></PropertyCategory>
      <SearchOption divisions={divisions}></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
