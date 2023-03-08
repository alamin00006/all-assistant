import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useDistrict from "../../Hooks/useDistrict";
import useDivision from "../../Hooks/useDivision";
import useHotels from "../../Hooks/useHotels";
import useUpazila from "../../Hooks/useUpazila";
import HotelRecentProperties from "../HotelRecentProperties/HotelRecentProperties";
import HotelSearchOption from "../HotelSearchOption/HotelSearchOption";

const Hotel = () => {
  const [getDistricts, setFindDistrict] = useState([]);
  const [getUpazilas, setUpazila] = useState([]);

  const [divisionName, setDivisionName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [upaZilaName, setUpazilaName] = useState("");
  const [userPrice, setUserPrice] = useState("200");
  const [room, setRoom] = useState("One");
  const [searchHotel, setSearchHotel] = useState([]);

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

  const handlePrice = (price) => {
    setUserPrice(price.split(" ")?.[2]);
  };

  const handleRoom = (room) => {
    setRoom(room);
  };

  const { isLoading, refetch } = useQuery(
    [divisionName, districtName, upaZilaName, userPrice, room],
    () =>
      fetch(
        `https://all-assistant-server.onrender.com/api/v1/hotel?division=${divisionName}&district=${districtName}&upazila=${upaZilaName}&rentPrice=${userPrice}&totalRentRoom=${room}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchHotel(data?.data);
          console.log(data);
        })
  );
  return (
    <div>
      <h1>This is a hotel Route</h1>
      <HotelSearchOption
        divisions={divisions}
        handleDistricts={handleDistricts}
        getDistricts={getDistricts}
        handleUpazilas={handleUpazilas}
        handleallUpazilas={handleallUpazilas}
        getUpazilas={getUpazilas}
        handlePrice={handlePrice}
        handleRoom={handleRoom}
      ></HotelSearchOption>
      <HotelRecentProperties
        searchHotel={searchHotel}
        refetch={refetch}
      ></HotelRecentProperties>
    </div>
  );
};

export default Hotel;
