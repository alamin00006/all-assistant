import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useDistrict from "../../Hooks/useDistrict";
import useDivision from "../../Hooks/useDivision";
import useUpazila from "../../Hooks/useUpazila";
import PropertyCategory from "../PropertyCategory/PropertyCategory";
import RecentProperties from "../RecentProperties/RecentProperties";
import SearchOption from "../SearchOption/SearchOption";

const House = () => {
  const [getDistricts, setFindDistrict] = useState([]);
  const [getUpazilas, setUpazila] = useState([]);

  const [divisionName, setDivisionName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [upaZilaName, setUpazilaName] = useState("");
  const [categoryName, setCategoryName] = useState("Family");
  const [userPrice, setUserPrice] = useState("1000");
  const [room, setRoom] = useState("Two");
  const [searchHouse, setSearchHouse] = useState([]);

  const [divisions] = useDivision();
  const [districts] = useDistrict();
  const [upazilas] = useUpazila();

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

  const handlePrice = (price) => {
    setUserPrice(price.split(" ")?.[2]);
  };

  const handleRoom = (room) => {
    setRoom(room);
  };

  const { isLoading, refetch } = useQuery(
    [divisionName, districtName, upaZilaName, categoryName, userPrice, room],
    () =>
      fetch(
        `http://localhost:5000/api/v1/house?division=${divisionName}&district=${districtName}&upazila=${upaZilaName}&categoryName=${categoryName}&rentPrice=${userPrice}&totalRentRoom=${room}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchHouse(data?.data);
        })
  );

  return (
    <div>
      <PropertyCategory handleCategory={handleCategory} />
      <SearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpazilas={handleUpazilas}
        handleallUpazilas={handleallUpazilas}
        getUpazilas={getUpazilas}
        handlePrice={handlePrice}
        handleRoom={handleRoom}
      ></SearchOption>
      <RecentProperties
        searchHouse={searchHouse}
        refetch={refetch}
      ></RecentProperties>
    </div>
  );
};

export default House;
