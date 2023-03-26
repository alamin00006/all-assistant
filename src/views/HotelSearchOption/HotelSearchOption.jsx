import React from "react";

const HotelSearchOption = ({
  divisions,
  handleDistricts,
  getDistricts,
  handleUpazilas,
  handleallUpazilas,
  getUpazilas,
  handlePrice,
  handleRoom,
}) => {
  // console.log(divisions);
  return (
    <div className="w-3/4 m-0 mx-auto">
      <h1 className="text-2xl text-center my-4">Search Option</h1>
      <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2 ">
        <select
          name="division"
          className="select w-full max-w-xs mb-2"
          onChange={(e) => handleDistricts(e.target.value)}
        >
          <option disabled selected defaultValue="--Select--">
            --Division--
          </option>
          {divisions.map((div) => (
            <option value={div.id} key={div.id}>
              {div.name}
            </option>
          ))}
        </select>
        <select
          name="district"
          className="select w-full max-w-xs mb-2"
          onChange={(e) => handleUpazilas(e.target.value)}
        >
          <option disabled selected defaultValue="--Select--">
            --District--
          </option>
          {getDistricts.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>

        <select name="upozilla" className="select w-full max-w-xs mb-2">
          <option disabled selected defaultValue="--Select--">
            --Upazila--
          </option>
          {getUpazilas.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>
        <select
          name="price"
          className="select w-full max-w-xs mb-2"
          onChange={(e) => {
            handlePrice(e.target.value);
          }}
        >
          <option disabled selected>
            --Price--
          </option>
          <option>Up to 200</option>
          <option>Up to 500</option>
          <option>Up to 1000</option>
          <option>Up to 5000</option>
          <option>Up to 10000</option>
          <option>Up to 30000</option>
        </select>

        <select
          name="price"
          className="select w-full max-w-xs"
          onChange={(e) => {
            handleRoom(e.target.value);
          }}
        >
          <option disabled selected>
            --Room--
          </option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
          <option>Five</option>
          <option>Six</option>
          <option>Seven</option>
          <option>Eight</option>
        </select>
      </div>
    </div>
  );
};
export default HotelSearchOption;
