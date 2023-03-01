import React, { useEffect, useState } from "react";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("bd-division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data.divisions));
  }, []);

  useEffect(() => {
    fetch("bd-districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data.districts));
  }, []);
  // console.log(districts);

  const handleDistricts = (e) => {
    console.log(e);
  };

  return (
    <div>
      <SearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
      ></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
