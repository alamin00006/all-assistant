import React, { useState } from "react";
import { DiWindows } from "react-icons/di";
import "./AddHouse.css";
import EditHotelModal from "./EdiHotelModal";
import DeleteHotelModal from "./DeleteHotelModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import AddHotelModal from "./AddHotelModal";
import useHotels from "../../Hooks/useHotels";

const AddHotel = () => {
  const [hotels, refetch] = useHotels();
  const [editHotel, setEditHotel] = useState({});
  const [deleteHotel, setDeleteHotel] = useState({});
  return (
    <div>
      <label htmlFor="hotel-modal" className="btn bg-cyan-300">
        <DiWindows />
        Add Hotel
      </label>
      <AddHotelModal refetch={refetch} />

      <div>
        {/* -------------------------table data------------------------ */}
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
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
              {hotels?.data?.map((hotel) => (
                <tr>
                  <th>1</th>
                  <td>FloorLevel</td>
                  <td>Quality Control Specialist</td>
                  <td>Littel, Schaden and Vandervort</td>
                  <td>Canada</td>
                  <td>12/16/2020</td>
                  <td>Blue</td>

                  <td>
                    <div className="flex space-x-4">
                      <div onClick={() => setEditHotel(hotel)}>
                        <label htmlFor="edit-hotel-modal" className="">
                          <FiEdit className="h-6 w-6" />
                        </label>
                      </div>

                      <div onClick={() => setDeleteHotel(hotel)}>
                        <label htmlFor="delete-hotel-modal" className="">
                          <RiDeleteBin6Line className="h-6 w-6" />
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              {/* <tr>
        <th>2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
        <td><td><div className="dropdown dropdown-right dropdown-end">
  <label tabIndex={0} className=" m-1 btn">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-green-400 rounded-box w-52">
    <li><Link>Edit</Link></li>
    <li><Link>Delete</Link></li>
  </ul>
</div>  </td></td>
      </tr> */}
              <EditHotelModal refetch={refetch} editHotel={editHotel} />

              <DeleteHotelModal refetch={refetch} deleteHotel={deleteHotel} />
            </tbody>
            <tfoot>
              <tr>
                <th></th>
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
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
