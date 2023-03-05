import React, { useEffect, useState } from "react";
import useHotels from "../../Hooks/useHotels";
import useHouse from "../../Hooks/useHouse";
import HotelRecentProperties from "../HotelRecentProperties/HotelRecentProperties";
import HotelSearchOption from "../HotelSearchOption/HotelSearchOption";
// import PropertyCategory from "../PropertyCategory/PropertyCategory";

const Hotel = () => {
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
  // console.log(districts);

  useEffect(() => {
    fetch("bd-upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data.upazilas));
  }, []);
  // console.log(upazilas);

  const handleDistricts = (e) => {
    const findDistricts = districts.filter((dis) => dis.division_id === e);
    setFindDistrict(findDistricts);
    // console.log(findDistricts);
  };

  const handleUpazilas = (e) => {
    const findUpazilas = upazilas.filter((ups) => ups.district_id === e);
    setUpazila(findUpazilas);
    // console.log(e);
    // console.log(e);
  };

  const [hotels, refetch, isLoading] = useHotels();
  // console.log(hotels);
  const datas = hotels?.data;
  return (
    <div>
      <h1>This is a hotel Route</h1>
      {/* <PropertyCategory></PropertyCategory> */}
      <HotelSearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpazilas={handleUpazilas}
        getUpazilas={getUpazilas}
      ></HotelSearchOption>
      <HotelRecentProperties datas={datas}></HotelRecentProperties>
    </div>
  );
};

export default Hotel;
