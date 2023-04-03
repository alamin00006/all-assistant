import React from 'react';

const SearchOptionforShift = ({
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
        <h1 className="text-1xl  my-4 ">Inside City</h1>
        <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2 ">
          <select
            name="division"
            className="select w-full max-w-xs mb-2"
            onChange={(e) => {
              handleDistricts(e.target.value);
              // console.log(e.target.value);
            }}
          >
            <option disabled selected>
              Select City
            </option>
            {divisions.map((div) => (
              <option value={div.id} key={div.id}>
                {div.name}
              </option>
            ))}
          </select>
          <select
          style={{ width: "100%", height: "47px" }}
            name="district"
            className="select w-full max-w-xs mb-2"
            onChange={(e) => handleUpazilas(e.target.value)}
          >
            <option disabled selected>
              Moving From
            </option>
            {getDistricts.map((dis) => (
              <option value={dis.id} key={dis.id}>
                {dis.name}
              </option>
            ))}
          </select>
          <select
          style={{ width: "100%", height: "47px" }}
            name="district"
            className="select w-full max-w-xs mb-2"
            onChange={(e) => handleUpazilas(e.target.value)}
          >
            <option disabled selected>
              Moving To
            </option>
            {getDistricts.map((dis) => (
              <option value={dis.id} key={dis.id}>
                {dis.name}
              </option>
            ))}
          </select>
          <div className="">
                  <input 
                  style={{ width: "100%", height: "47px" }}
                    type="date"
                    className="border-1 border-black-200 input input-bordered input-sm"
                    required
                    name="availableFrom"
                    placeholder="Available From"
                    id=""
                  />
         </div>
       
        </div>
        <h1 className="text-1xl  my-4 ">Item Description</h1>
        <div>
        <textarea placeholder="King Size Bed,Daining Space,ETC" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
        </div>
        <h1 className="text-1xl  my-4 ">Name</h1>
        <div>
        <input type="text" placeholder="Name" className="input w-full max-w-xs" />
        </div>
        <h1 className="text-1xl  my-4 ">Mobile</h1>
        <div>
        <input type="text" placeholder="Mobile" className="input w-full max-w-xs" />
        </div>
        <div>
        <button className="btn bg-green-600 btn-success">Check Price</button>
        </div>
      </div>
      
    );
  };
  

export default SearchOptionforShift;