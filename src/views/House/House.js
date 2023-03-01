import React, { useEffect, useState } from "react";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upozillas, setUpozillas] = useState([]);
  const [getDistricts, setFindDistrict] = useState([]);
  const [getFindUpozillas, setFindUpozillas] = useState([]);
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

  useEffect(() => {
    fetch("bd-upozilla.json")
      .then((res) => res.json())
      .then((data) => setUpozillas(data.upazilas));
  }, []);
  // console.log(upozillas);

  const handleDistricts = (e) => {
    const findDistricts = districts.filter((dis) => dis.division_id === e);
    setFindDistrict(findDistricts);
    // console.log(findDistricts);
  };
  const handleUpozilla = (e) => {
    const findUpozilla = upozillas.filter((upz) => upz.district_id === e);
    setFindUpozillas(findUpozilla);
  };
  // console.log(getDistricts);
  return (
    <div>
      <SearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpozilla={handleUpozilla}
        getFindUpozillas={getFindUpozillas}
      ></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
