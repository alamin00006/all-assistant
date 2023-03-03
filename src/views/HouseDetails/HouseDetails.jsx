import React from "react";
import { useParams } from "react-router-dom";
import HouseDetailsHook from "../../Hooks/HoseDetailsHook";

const HouseDetails = () => {
  //   const [info, setInfo] = useState();
  const { id } = useParams();
  const [house, refetch, isLoading] = HouseDetailsHook(id);
  console.log(house?.data);

  return (
    <div className="w-3/4 m-0 mx-auto">
      <h1>House Details</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
        <div className="border-2 border-sky-500">
          <img
            className="p-4"
            src={`http://localhost:5000/${house?.data.houseImage[0]}`}
            alt=""
          />
        </div>
        <div className="border-2 border-sky-500 text-center">
          <div>
            <h2>PROPERTY ID:1610</h2>
            <p>
              Location: <span>{house?.data.district}</span>{" "}
              <span>{house?.data.division}</span>{" "}
              <span>{house?.data.upazila}</span>
            </p>
            <button className="btn bg-lime-500 text-white">For Family</button>
          </div>
          <div>
            <div className="flex flex-row justify-center text-left">
              <div className="mr-4">
                <div>
                  <h2>{house?.data.bedRoomInfo}</h2>
                  <p>No. of Bedroom</p>
                </div>
                <div>
                  <h2>{house?.data.diningSpace}</h2>
                  <p>Dining Space</p>
                </div>
                <div>
                  <h2>{house?.data.commonBathRoom}</h2>
                  <p>Common Bathroom</p>
                </div>
                <div>
                  <h2>{house?.data.balcony}</h2>
                  <p>Balcony</p>
                </div>
                <div>
                  <h2>{house?.data.propertyCondition}</h2>
                  <p>Property condition</p>
                </div>
                <div>
                  <h2>
                    {house?.data.rentPrice}
                    <span> {house?.data.rentPriceTitle}</span>
                  </h2>
                  <p>Rent</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>{house?.data.floorLevel}</h2>
                  <p>Floor Level</p>
                </div>
                <div>
                  <h2>{house?.data.spaceSize}</h2>
                  <p>Space Size</p>
                </div>
                <div>
                  <h2>{house?.data.attachedBathRoom}</h2>
                  <p>Attached Bathroom</p>
                </div>
                <div>
                  <h2>{house?.data.rentPriceTitle}</h2>
                  <p>Rental Preference</p>
                </div>
                <div>
                  <h2>{house?.data.availableFrom}</h2>
                  <p>Available From</p>
                </div>
                <div>
                  <h2>{house?.data.deposit}</h2>
                  <p>Deposit</p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <button className="btn bg-lime-500 text-white mr-4">
                Get Phone Number
              </button>
              <button className="btn btn-outline">Share</button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-7">
        <h1>Over View</h1>
        <table className="table w-full border border-sky-500">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Kitchen</td>
              <td>{house?.data.kitchen}</td>
              <td>Floor Type</td>
              <td>{house?.data.floorType}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Furnishing</td>
              <td>{house?.data.furnishing}</td>
              <td>Water Supply</td>
              <td>{house?.data.facing}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Gas Supply</td>
              <td>Cylinder</td>
              <td>Facing</td>
              <td>North</td>
            </tr>
            <tr>
              <td>CCTV Camera</td>
              <td>{house?.data.ccTvCamera}</td>
              <td>Security Guard</td>
              <td>{house?.data.securityGuard}</td>
            </tr>

            <tr>
              <td>Store Room</td>
              <td>{house?.data.storeRoom}</td>
              <td>IPS Connection</td>
              <td>{house?.data.ipsConnection}</td>
            </tr>

            <tr>
              <td>Lift</td>
              <td>{house?.data.lift}</td>
              <td>Parking Space</td>
              <td>{house?.data.parkingSpace}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* fahim */}
      {/* 
      <div className="flex flex-col items-center border-2 border-sky-500 w-1/3">
        <div className="flex  items-center ">
          <div>
            <img
              className="w-24"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              alt=""
            />
          </div>
          <div>
            <h1>Name:Muhib</h1>
            <p>01918647966</p>
            <button className="btn btn-xs">Edit</button>
            <button className="btn btn-xs">Logout</button>
          </div>
        </div>
        <div>
          <h1>All</h1>
          <h1>HomeService</h1>
          <h1>Shifting</h1>
          <h1>Rental</h1>
        </div>
      </div> */}
    </div>
  );
};

export default HouseDetails;
