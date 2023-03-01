import React from "react";

const SearchOption = ({ divisions }) => {
  //   console.log(divisions);
  return (
    <div>
      Search Option
      <div>
        <select className="select w-full max-w-xs">
          <option defaultValue="--Select--">--Select--</option>
          {divisions.map((div) => (
            <option key={div.id}>{div.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchOption;
