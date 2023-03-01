import React, { useEffect, useState } from "react";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [getDistricts, setFindDistrict] = useState([]);
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
    const findDistricts = districts.filter((dis) => dis.division_id === e);
    setFindDistrict(findDistricts);
    // console.log(findDistricts);
  };
  // console.log(getDistricts);
  return (
    <div>
      <SearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
      ></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
