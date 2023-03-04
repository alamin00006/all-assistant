import React from "react";
import { useNavigate } from "react-router-dom";

const HotelRecentProperties = ({ datas }) => {
  const navigate = useNavigate();
  const houseDetails = (id) => {
    // console.log(id);
    navigate(`/hoteldetails/${id}`);
  };
  return (
    <div className="w-3/4 m-0 mx-auto">
      <h1 className="text-center">Recent Properties</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-2 xl:grid xl:grid-cols-4 gap-2 justify-items-center">
        {datas ? (
          <>
            {datas.map((house) => (
              <div key={house._id} className="card w-72 bg-base-100 shadow-xl">
                <figure onClick={() => houseDetails(house._id)}>
                  <img
                    className="p-3 click"
                    src={`http://localhost:5000/${house?.houseImage?.[0]}`}
                    alt="Shoes"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">
                    {house.division}
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
          </>
        ) : (
          <>
            <div>Loading</div>
          </>
        )}
      </div>
    </div>
  );
};

export default HotelRecentProperties;
