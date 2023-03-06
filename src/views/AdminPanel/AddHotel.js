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
const AddHotel = () => {
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
      <AddHotelModal refetch={refetch} />

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
                <th>SpaceSize</th>
                <th>Cm.Bathroom</th>
                <th>At.Bathroom</th>
                <th>Balcony</th>
                <th>P.Condation</th>
                <th>Facing</th>
                <th>AvailableFrom</th>
                <th>RentPriceTitle</th>
                <th>RentPrice</th>
                <th>Deposite</th>
                <th>Discount</th>
                <th>Status</th>
                <th>kitchen</th>
                <th>DiningSpace</th>
                <th>Furnishing </th>
                <th>GasSupply</th>
                <th>ccTV</th>
                <th>StoreRoom</th>
                <th>Lift</th>
                <th>WaterSupply</th>
                <th>Sc.Gard</th>
                <th>iPS</th>
                <th>Pk.Space</th>
                <th>FloorType</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {hotels?.data?.map((hotel, index) => (
                <tr key={hotel._id}>
                  <td>{index + 1}</td>
                  <td>FloorLevel</td>
                  <td>Quality Control Specialist</td>
                  <td>Littel, Schaden and Vandervort</td>
                  <td>Canada</td>
                  <td>12/16/2020</td>
                  <td>Blue</td>

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
