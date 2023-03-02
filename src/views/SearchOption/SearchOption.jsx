import React from "react";

const SearchOption = ({
  divisions,
  handleDistricts,
  getDistricts,
  handleUpazilas,
  getUpazilas,
}) => {
  console.log(getUpazilas);
  return (
    <div className="w-3/4 m-0 mx-auto">
      Search Option
      <div>
        <select
          name="division"
          className="select w-full max-w-xs"
          onChange={(e) => handleDistricts(e.target.value)}
        >
          <option disabled defaultValue="--Select--">
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
          <option disabled defaultValue="--Select--">
            --Select--
          </option>
          {getDistricts.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>

        <select name="upozilla" className="select w-full max-w-xs">
          <option disabled defaultValue="--Select--">
            --Select--
          </option>
          {getUpazilas.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>
        <select name="price" className="select w-full max-w-xs">
          <option disabled defaultValue="--Select--">
            --Select--
          </option>
          <option>Up to 1000</option>
          <option>Up to 2000</option>
          <option>Up to 4000</option>
          <option>Up to 6000</option>
          <option>Up to 8000</option>
          <option>Up to 10000</option>
        </select>

        <select name="price" className="select w-full max-w-xs">
          <option disabled defaultValue="--Select--">
            --Select--
          </option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
          <option>Five</option>
          <option>Six</option>
        </select>
      </div>
    </div>
  );
};

export default SearchOption;
