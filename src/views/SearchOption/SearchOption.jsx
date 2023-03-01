import React from "react";

const SearchOption = ({ divisions }) => {
 
const SearchOption = ({ divisions, handleDistricts }) => {
  //   console.log(handleDistricts);
  return (
    <div>
      Search Option
      <div>
        <select
          name="district"
          className="select w-full max-w-xs"
          onChange={(e) => handleDistricts(e.target.value)}
        >
          <option disabled defaultValue="--Select--">
            --Select--
          </option>
          {divisions.map((div) => (
            <option key={div.id}>{div.name}</option>
          ))
          }
            <option value={div.id} key={div.id}>
              {div.id} {div.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchOption;
