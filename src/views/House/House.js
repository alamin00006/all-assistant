import React, { useEffect, useState } from "react";
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

  const handleDivision = (divisionName) => {
    console.log(divisionName);
  };
  const [searchHouse, setSearchHouse] = useState([]);

  // const { isLoading, refetch } = useQuery([], () =>
  //   fetch(
  //     `http://localhost:5000/api/v1/product?division=${}&page=${page}&size=${2}& `,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setSearchHouse(data?.data);
  //       console.log(data);
  //     })
  // );

  const handleDistricts = (e) => {
    const findDistricts = districts.filter((dis) => dis.division_id === e);
    setFindDistrict(findDistricts);
    // console.log(findDistricts);
  };

  const handleUpazilas = (e) => {
    const findUpazilas = upazilas.filter((ups) => ups.district_id === e);
    setUpazila(findUpazilas);
    console.log(e);
  };
  //console.log(getUpazilas);

  return (
    <div>
      <PropertyCategory />
      <SearchOption
        handleDivision={handleDivision}
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpazilas={handleUpazilas}
        getUpazilas={getUpazilas}
      ></SearchOption>
      <RecentProperties></RecentProperties>
    </div>
  );
};

export default House;
