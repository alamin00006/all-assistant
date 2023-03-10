import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import DetailsHouseImage from "../DetailsHouseImage/DetailsHouseImage";
import ModalBooking from "../../views/ModalBooking/ModalBooking";

const HouseDetails = () => {
  const { id } = useParams();

  const [house, setHouse] = useState({});
  useEffect(() => {
    const url = `https://all-assistant-server.onrender.com/api/v1/house/${id}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setHouse(data.data));
  }, [house, id]);
  // if (!house) {
  //   return <div>Loading...</div>;
  // }
  const images = house?.image;

  // const handleHouseOrder = async () => {
  //   const orderData = {
  //     orderHouse: house,
  //     name: "alamin",
  //     phone: "01749718743",
  //   };
  //   try {
  //     const { data } = await axios.post(
  //       `https://all-assistant-server.onrender.com/api/v1/order`,
  //       orderData
  //     );
  //     toast.success(data.data.message);
  //   } catch (error) {
  //     return toast.warn(error.response.data.message);
  //   }
  //   // e.target.reset();
  // };

  return (
    <div className="w-3/4 m-0 mx-auto my-8">
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
        <div className="border-2 border-sky-500">
          <DetailsHouseImage images={images}></DetailsHouseImage>
          {/* <img
            className="p-4"
            src={`https://all-assistant-server.onrender.com/${house.houseImage?.[0]}`}
            alt=""
          /> */}
        </div>
        <div className="border-2 border-sky-500 text-center">
          <div className="mt-3">
            <h2>PROPERTY ID:1610</h2>
            <p>
              Location: <span>{house?.district}</span>{" "}
              <span>{house?.division}</span> <span>{house?.upazila}</span>
            </p>
            <button className="p-2 my-2 rounded bg-sky-500 text-white cursor-text">
              {house?.categoryName}
            </button>
          </div>
          <div>
            <div className="flex flex-row justify-center text-left">
              <div className="mr-4">
                <div>
                  <h2>{house?.bedRoomInfo}</h2>
                  <p>No. of Bedroom</p>
                </div>
                <div>
                  <h2>{house?.diningSpace}</h2>
                  <p>Dining Space</p>
                </div>
                <div>
                  <h2>{house?.commonBathRoom}</h2>
                  <p>Common Bathroom</p>
                </div>
                <div>
                  <h2>{house?.balcony}</h2>
                  <p>Balcony</p>
                </div>
                <div>
                  <h2>{house?.propertyCondition}</h2>
                  <p>Property condition</p>
                </div>
                <div>
                  <h2>
                    {house?.rentPrice}
                    <span> {house?.rentPriceTitle}</span>
                  </h2>
                  <p>Rent</p>
                </div>
              </div>
              <div>
                <div>
                  <h2>{house?.floorLevel}</h2>
                  <p>Floor Level</p>
                </div>
                <div>
                  <h2>{house?.spaceSize}</h2>
                  <p>Space Size</p>
                </div>
                <div>
                  <h2>{house?.attachedBathRoom}</h2>
                  <p>Attached Bathroom</p>
                </div>
                <div>
                  <h2>{house?.rentPriceTitle}</h2>
                  <p>Rental Preference</p>
                </div>
                <div>
                  <h2>{house?.availableFrom}</h2>
                  <p>Available From</p>
                </div>
                <div>
                  <h2>{house?.deposit}</h2>
                  <p>Deposit</p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="booking-input"
                className="btn bg-sky-500 hover:bg-sky-700 text-white mr-4"
              >
                Get Phone Number
              </label>

              <button className="btn bg-violet-500 hover:bg-violet-600 border-none text-white">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-7">
        <h1 className="mb-3 text-2xl ">Over View</h1>
        <table className="table w-full border border-sky-500 ">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Kitchen</td>
              <td>{house?.kitchen}</td>
              <td>Floor Type</td>
              <td>{house?.floorType}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Furnishing</td>
              <td>{house?.furnishing}</td>
              <td>Water Supply</td>
              <td>{house?.facing}</td>
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
              <td>{house?.ccTvCamera}</td>
              <td>Security Guard</td>
              <td>{house?.securityGuard}</td>
            </tr>

            <tr>
              <td>Store Room</td>
              <td>{house?.storeRoom}</td>
              <td>IPS Connection</td>
              <td>{house?.ipsConnection}</td>
            </tr>

            <tr>
              <td>Lift</td>
              <td>{house?.lift}</td>
              <td>Parking Space</td>
              <td>{house?.parkingSpace}</td>
            </tr>
            <ToastContainer className="toast-position" position="top-center" />
          </tbody>
        </table>
      </div>
      <ModalBooking house={house}></ModalBooking>
    </div>
  );
};

export default HouseDetails;
