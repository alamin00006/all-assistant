import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import img1 from "../../assets//images/house1.jpg";

const RecentProperties = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch("bd-houseinfo.json")
      .then((res) => res.json())
      .then((data) => setHouses(data.houses));
  }, []);
  console.log(houses);
  return (
    <div className="w-3/4 m-0 mx-auto">
      <h1 className="text-center">Recent Properties</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-2 xl:grid xl:grid-cols-4 gap-2 justify-items-center">
        {houses.map((house) => (
          <div key={house.id} className="card w-72 bg-base-100 shadow-xl">
            <Link to={`/lists/${house.id}`}>
              <figure>
                <img className="p-3" src={house.img} alt="Shoes" />
              </figure>
            </Link>

            <div className="card-body">
              <h2 className="card-title">
                {house.taka} taka
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProperties;
