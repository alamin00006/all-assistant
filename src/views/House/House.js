import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PropertyCategory from "../PropertyCategory/PropertyCategory";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [divisions, setDivision] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [getDistricts, setFindDistrict] = useState([]);
  const [getUpazilas, setUpazila] = useState([]);

  const [divisionName, setDivisionName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [upaZilaName, setUpazilaName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [searchHouse, setSearchHouse] = useState([]);
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

  const handleDistricts = (e) => {
    const findDistricts = districts.filter((dis) => dis.division_id === e);
    setFindDistrict(findDistricts);
    const findDivision = divisions.find(
      (divisionName) => e === divisionName.id
    );
    setDivisionName(findDivision?.name);
  };

  const handleUpazilas = (e) => {
    const findUpazilas = upazilas.filter((ups) => ups.district_id === e);
    setUpazila(findUpazilas);
    const findDistrict = districts.find(
      (districtName) => e === districtName.id
    );
    setDistrictName(findDistrict?.name);
  };
  const handleallUpazilas = (e) => {
    const findUPazila = upazilas.find((districtName) => e === districtName.id);
    setUpazilaName(findUPazila?.name);
  };

  const handleCategory = (name) => {
    setCategoryName(name);
  };

  const { isLoading, refetch } = useQuery(
    [divisionName, districtName, upaZilaName, categoryName],
    () =>
      fetch(
        `http://localhost:5000/api/v1/house?division=${divisionName}&district=${districtName}&upazila=${upaZilaName} `,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // setSearchHouse(data?.data);
          console.log(data);
        })
  );

  return (
    <div>
      <PropertyCategory
        handleCategory={handleCategory}
        setCategoryName={setCategoryName}
      />
      <SearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpazilas={handleUpazilas}
        handleallUpazilas={handleallUpazilas}
        getUpazilas={getUpazilas}
      ></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
