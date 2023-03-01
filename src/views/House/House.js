import React, { useEffect, useState } from "react";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);
  // const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("bd-division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data.divisions));
  }, []);

  // useEffect(() => {
  //   fetch("bd-division.json")
  //     .then((res) => res.json())
  //     .then((data) => setDistricts(data.districts));
  // }, []);
  // console.log(divisions);
  return (
    <div>
      <SearchOption divisions={divisions}></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
