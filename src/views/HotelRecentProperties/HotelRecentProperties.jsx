import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HotelRecentProperties = ({ searchHotel, refetch }) => {
  const navigate = useNavigate();
  const hotelDetails = (id) => {
    console.log(id);
    navigate(`/hoteldetails/${id}`);
  };

  useEffect(() => {
    if (!searchHotel) refetch();
  });
  return (
    <div className="w-3/4 m-0 mx-auto">
      <h1 className="text-center">Recent Properties</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-2 xl:grid xl:grid-cols-4 gap-2 justify-items-center">
        {searchHotel ? (
          <>
            {searchHotel.map((hotel) => (
              <div key={hotel._id} className="card w-72 bg-base-100 shadow-xl">
                <figure onClick={() => hotelDetails(hotel._id)}>
                  <img
                    className="p-3 click"
                    src={`https://all-assistant-server.onrender.com/${hotel?.image?.[0]}`}
                    alt="Shoes"
                  />
                </figure>

                <div className="card-body">
                  <div className="flex items-center justify-center">
                    <h2 className="card-title ">{hotel.categoryName}</h2>

                    <h2 className="card-title">{hotel.rentPrice}</h2>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <div>
                        <h2>{hotel.bedRoomInfo}</h2>
                        <p>Bedroom</p>
                      </div>
                      <div className="ml-16">
                        <h2>{hotel.floorLevel}</h2>
                        <p>Floor Level</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div>
                        <h2>{hotel.commonBathRoom}</h2>
                        <p>Bathroom</p>
                      </div>
                      <div className="ml-16">
                        <h2>{hotel.spaceSize}</h2>
                        <p>Space Size</p>
                      </div>
                    </div>
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
