import React from "react";

const SearchOption = ({
  divisions,
  handleDistricts,
  getDistricts,
  handleUpazilas,
  handleallUpazilas,
  getUpazilas,
  handlePrice,
  handleRoom,
}) => {
  return (
    <div className="w-3/4 m-0 mx-auto">
      Search Option
      <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2">
        <select
          name="division"
          className="select w-full max-w-xs"
          onChange={(e) => {
            handleDistricts(e.target.value);
            // console.log(e.target.value);
          }}
        >
          <option disabled selected>
            --Select--
          </option>
          {divisions.map((div) => (
            <option value={div.id} key={div.id}>
              {div.name}
            </option>
          ))}
        </select>
        <select
          name="district"
          className="select w-full max-w-xs"
          onChange={(e) => handleUpazilas(e.target.value)}
        >
          <option disabled selected>
            --Select--
          </option>
          {getDistricts.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>

        <select name="upazilla" className="select w-full max-w-xs">
          <option disabled selected defaultValue="--Select--">
            --Select--
          </option>
          {getUpazilas.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>
        <select
          name="price"
          className="select w-full max-w-xs"
          onChange={(e) => {
            handlePrice(e.target.value);
          }}
        >
          <option disabled selected>
            --Select--
          </option>
          <option>Up to 1000</option>
          <option>Up to 2000</option>
          <option>Up to 4000</option>
          <option>Up to 6000</option>
          <option>Up to 8000</option>
          <option>Up to 20000</option>
        </select>

        <select
          name="price"
          className="select w-full max-w-xs"
          onChange={(e) => {
            handleRoom(e.target.value);
          }}
        >
          <option disabled selected>
            --Select--
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

export default SearchOption;
