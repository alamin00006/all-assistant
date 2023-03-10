import React, { useState } from "react";
import "./AddHouse.css";
import EditHotelModal from "./EdiHotelModal";
import DeleteHotelModal from "./DeleteHotelModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import AddHotelModal from "./AddHotelModal";
import useHotels from "../../Hooks/useHotels";
import { AiOutlineEye } from "react-icons/ai";
import ViewHotelModal from "./ViewHotelModal";
const AddHotel = ({ divisions, districts, upazilas }) => {
  const [hotels, refetch] = useHotels();
  const [editHotel, setEditHotel] = useState({});
  const [detailsHotel, setDetailsHotel] = useState({});
  const [deleteHotel, setDeleteHotel] = useState({});
  return (
    <div>
      <label
        htmlFor="hotel-modal"
        className="bg-rose-600 text-white px-8 text-lg py-2 rounded-lg cursor-pointer"
      >
        + Add Hotel
      </label>
      <AddHotelModal
        refetch={refetch}
        divisions={divisions}
        districts={districts}
        upazilas={upazilas}
      />

      <div className="mt-5">
        {/* -------------------------table data------------------------ */}
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr className="bg-amber-200">
                <th>No.</th>
                <th>BedRoom.Info</th>
                <th>Floor</th>
                <th>Division</th>
                <th>District</th>
                <th>Upazila</th>
                <th>Total Rent Room</th>
                <th>At.Bathroom</th>
                <th>Balcony</th>
                <th>Rent Price</th>
                <th>Deposite</th>
                <th>Discount</th>
                <th>Status</th>
                <th>kitchen</th>
                <th>Dining Space</th>
                <th>Furnishing </th>
                <th>Gas Supply</th>
                <th>ccTV</th>
                <th>Store Room</th>
                <th>Water Supply</th>
                <th>Sc.Gard</th>
                <th>iPS</th>
                <th>Pk.Space</th>
                <th>Floor Type</th>
                <th>House Details Address</th>
                <th>CreateAT</th>
                <th>UpdateAT</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {hotels?.data?.map((hotel) => (
                <tr>
                  <th>1</th>
                  <td>{hotel.bedRoomInfo}</td>
                  <td>{hotel.floorLevel}</td>
                  <td>{hotel.division}</td>
                  <td>{hotel.district}</td>
                  <td>{hotel.upazila}</td>
                  <td>{hotel.totalRentRoom}</td>
                  <td>{hotel.attachedBathRoom}</td>
                  <td>{hotel.balcony}</td>
                  <td>{hotel.rentPriceTitle}</td>
                  <td>{hotel.rentPrice}</td>
                  <td>{hotel.deposit}</td>
                  <td>{hotel.discount}</td>
                  <td>{hotel.status}</td>
                  <td>{hotel.kitchen}</td>
                  <td>{hotel.diningSpace}</td>
                  <td>{hotel.furnishing}</td>
                  <td>{hotel.gasSupply}</td>
                  <td>{hotel.ccTvCamera}</td>
                  <td>{hotel.storeRoom}</td>
                  <td>{hotel.waterSupply}</td>
                  <td>{hotel.securityGuard}</td>
                  <td>{hotel.ipsConnection}</td>
                  <td>{hotel.parkingSpace}</td>
                  <td>{hotel.floorType}</td>
                  <td>{hotel.houseDetailsAddress}</td>
                  <td>{hotel.createdAt}</td>
                  <td>{hotel.updatedAt}</td>

                  <td>
                    <div className="flex space-x-4">
                      <div onClick={() => setDetailsHotel(hotel)}>
                        <label htmlFor="view-hotel-modal" className="">
                          <AiOutlineEye className="h-6 w-6 cursor-pointer" />
                        </label>
                      </div>
                      <div onClick={() => setEditHotel(hotel)}>
                        <label htmlFor="edit-hotel-modal" className="">
                          <FiEdit className="h-6 w-6 cursor-pointer" />
                        </label>
                      </div>

                      <div onClick={() => setDeleteHotel(hotel)}>
                        <label htmlFor="delete-hotel-modal" className="">
                          <RiDeleteBin6Line className="h-6 w-6 text-rose-500 cursor-pointer" />
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

              <ViewHotelModal refetch={refetch} detailsHotel={detailsHotel} />
              <EditHotelModal refetch={refetch} editHotel={editHotel} />

              <DeleteHotelModal refetch={refetch} deleteHotel={deleteHotel} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
