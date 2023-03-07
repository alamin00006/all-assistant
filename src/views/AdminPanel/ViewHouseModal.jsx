import React from "react";
import DetailsHouseImage from "../DetailsHouseImage/DetailsHouseImage";

const ViewHouseModal = ({ detailsHouse }) => {
  const house = detailsHouse;
  const images = detailsHouse?.image;
  // console.log(detailsHouse);
  return (
    <div>
      <input type="checkbox" id="view-house-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box glass w-11/12 max-w-5xl mt-24 bg-orange-200">
          <h3 className="font-bold text-lg">Add house</h3>
          <div className="w-3/4 m-0 mx-auto">
            <h1>House Details</h1>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
              <div className="border-2 border-sky-500">
                <DetailsHouseImage images={images}></DetailsHouseImage>
                {/* <img
          className="p-4"
          src={`https://all-assistant-sever-muhib95.vercel.app/${house.houseImage?.[0]}`}
          alt=""
        /> */}
              </div>
              <div className="border-2 border-sky-500 text-center">
                <div>
                  <h2>PROPERTY ID:1610</h2>
                  <p>
                    Location: <span>{house?.district}</span>{" "}
                    <span>{house?.division}</span> <span>{house?.upazila}</span>
                  </p>
                  <button className="btn bg-sky-500 hover:bg-sky-700 text-white">
                    Hotels
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
                  {/* <div className="my-4">
                  <label
                    htmlFor="booking-input"
                    className="btn bg-sky-500 hover:bg-sky-700 text-white mr-4"
                  >
                    Get Phone Number
                  </label>
                  
                  <button className="btn bg-violet-500 hover:bg-violet-600 border-none text-white">
                    Share
                  </button>
                </div> */}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mt-7">
              <h1>Over View</h1>
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
                </tbody>
              </table>
            </div>
            {/* <ModalBooking house={house}></ModalBooking> */}
          </div>
          <div className="flex justify-end">
            <div className="modal-action">
              <label
                htmlFor="view-house-modal"
                className="btn bg-red-500 hover:bg-red-600 text-white"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHouseModal;
