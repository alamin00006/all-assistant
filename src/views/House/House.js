import React, { useEffect, useState } from "react";
import useHouse from "../../Hooks/useHouse";
import PropertyCategory from "../PropertyCategory/PropertyCategory";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [getDistricts, setFindDistrict] = useState([]);
  const [getUpazilas, setUpazila] = useState([]);

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
  //console.log(districts)

  useEffect(() => {
    fetch("bd-upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data.upazilas));
  }, []);
  //console.log(upazilas);

  const handleDistricts = (e) => {
    const findDistricts = districts.filter((dis) => dis.division_id === e);
    setFindDistrict(findDistricts);
    // console.log(findDistricts);
  };

  const handleUpazilas = (e) => {
    const findUpazilas = upazilas.filter((ups) => ups.district_id === e);
    setUpazila(findUpazilas);
    // console.log(e);
    console.log(e);
  };
  const [houses, refetch, isLoading] = useHouse();

  const datas = houses?.data;
  // const d = houses[0];
  // const { data } = d;
  // console.log(datas);
  // console.log(getUpazilas);
  return (
    <div>
      <PropertyCategory></PropertyCategory>

      <SearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpazilas={handleUpazilas}
        getUpazilas={getUpazilas}
      ></SearchOption>
      <RecentProperties datas={datas}></RecentProperties>
    </div>
  );
};

export default House;
