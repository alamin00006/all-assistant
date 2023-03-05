import React, { useState } from "react";
import AddHouseModal from "./AddHouseModal";
import { DiWindows } from "react-icons/di";
import "./AddHouse.css";
import EditHouseModal from "./EditHouseModal";
import DeleteHouseModal from "./DeleteHouseModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import useHouse from "../../Hooks/useHouse";

const AddHouse = () => {
  const [houses, refetch] = useHouse();
  //console.log(houses);

  const [editHouse, setEditHouse] = useState({});
  const [deleteHouse, setDeleteHouse] = useState({});
  return (
    <div>
      <label htmlFor="my-modal-5" className="btn bg-cyan-300">
        <DiWindows />
        AddHouse
      </label>
      <AddHouseModal refetch={refetch} />

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
              {houses?.data?.map((house) => (
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
                      <div onClick={() => setEditHouse(house)}>
                        <label htmlFor="edit-modal" className="">
                          <FiEdit className="h-6 w-6" />
                        </label>
                      </div>

                      <div onClick={() => setDeleteHouse(house)}>
                        <label htmlFor="deletemodal" className="">
                          <RiDeleteBin6Line className="h-6 w-6" />
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
             
              <EditHouseModal editHouse={editHouse} refetch={refetch} />

              <DeleteHouseModal deleteHouse={deleteHouse} refetch={refetch} />
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

export default AddHouse;
