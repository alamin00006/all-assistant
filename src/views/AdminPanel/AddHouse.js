import React, { useEffect, useState } from "react";
import AddHouseModal from "./AddHouseModal";
import "./AddHouse.css";
import EditHouseModal from "./EditHouseModal";
import DeleteHouseModal from "./DeleteHouseModal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import useHouse from "../../Hooks/useHouse";
import ViewHouseModal from "./ViewHouseModal";

const AddHouse = () => {
  const [houses, refetch] = useHouse();
  // console.log(houses);

  const [editHouse, setEditHouse] = useState({});
  const [detailsHouse, setDetailsHouse] = useState({});
  const [deleteHouse, setDeleteHouse] = useState({});
  // console.log(detailsHouse);
  return (
    <div>
      <label
        htmlFor="my-modal-5"
        className="bg-rose-600 text-white px-8 text-lg py-2 rounded-lg cursor-pointer"
      >
        + AddHouse
      </label>
      <AddHouseModal refetch={refetch} />

      <div>
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
                <th>TotalRentRoom</th>
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
                <th>CategoryName</th>
                <th>HouseDetailsAddress</th>
                <th>CreateAT</th>
                <th>UpdateAT</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {houses?.data?.map((house, index) => (
                <tr key={house._id}>
                  <td>{index + 1}</td>
                  <td>{house.bedRoomInfo}</td>
                  <td>{house.floorLevel}</td>
                  <td>{house.division}</td>
                  <td>{house.district}</td>
                  <td>{house.upazila}</td>
                  <td>{house.totalRentRoom}</td>
                  <td>{house.spaceSize}</td>
                  <td>{house.commonBathRoom}</td>
                  <td>{house.attachedBathRoom}</td>
                  <td>{house.balcony}</td>
                  <td>{house.propertyCondition}</td>
                  <td>{house.facing}</td>
                  <td>{house.availableFrom}</td>
                  <td>{house.rentPriceTitle}</td>
                  <td>{house.rentPrice}</td>
                  <td>{house.deposit}</td>
                  <td>{house.discount}</td>
                  <td>{house.status}</td>
                  <td>{house.kitchen}</td>
                  <td>{house.diningSpace}</td>
                  <td>{house.furnishing}</td>
                  <td>{house.gasSupply}</td>
                  <td>{house.ccTvCamera}</td>
                  <td>{house.storeRoom}</td>
                  <td>{house.lift}</td>
                  <td>{house.waterSupply}</td>
                  <td>{house.securityGuard}</td>
                  <td>{house.ipsConnection}</td>
                  <td>{house.parkingSpace}</td>
                  <td>{house.floorType}</td>
                  <td>{house.categoryName}</td>
                  <td>{house.houseDetailsAddress}</td>
                  <td>{house.createdAt}</td>
                  <td>{house.updatedAt}</td>

                  <td>
                    <div className="flex space-x-4">
                      <div onClick={() => setDetailsHouse(house)}>
                        <label htmlFor="view-house-modal" className="">
                          <AiOutlineEye className="h-6 w-6 cursor-pointer" />
                        </label>
                      </div>
                      <div onClick={() => setEditHouse(house)}>
                        <label htmlFor="edit-modal" className="">
                          <FiEdit className="h-6 w-6 cursor-pointer" />
                        </label>
                      </div>

                      <div onClick={() => setDeleteHouse(house)}>
                        <label htmlFor="deletemodal" className="">
                          <RiDeleteBin6Line className="h-6 w-6 cursor-pointer text-rose-500" />
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

              <EditHouseModal editHouse={editHouse} refetch={refetch} />
              <ViewHouseModal detailsHouse={detailsHouse} refetch={refetch} />

              <DeleteHouseModal deleteHouse={deleteHouse} refetch={refetch} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddHouse;
