import React from "react";

const SearchOption = ({ divisions, handleDistricts, getDistricts }) => {
  console.log(getDistricts);
  return (
    <div>
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
              {div.id} {div.name}
            </option>
          ))}
        </select>
        <select name="district" className="select w-full max-w-xs">
          <option disabled defaultValue="--Select--">
            --Select--
          </option>
          {getDistricts.map((dis) => (
            <option value={dis.id} key={dis.id}>
              {dis.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchOption;
