import axios from "axios";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";

const EditHouseModal = ({ editHouse, refetch }) => {
  const [discount, setDiscount] = useState("0");

  const handleHouseUpdate = async (e) => {
    e.preventDefault();
    const houseUpdate = {
      bedRoomInfo: e.target.bedRoomInfo.value,
      floorLevel: e.target.floorLevel.value,
      division: e.target.division.value,
      district: e.target.district.value,
      upazila: e.target.upazila.value,
      totalRentRoom: e.target.totalRentRoom.value,
      spaceSize: e.target.spaceSize.value,
      commonBathRoom: e.target.commonBathRoom.value,
      attachedBathRoom: e.target.attachedBathRoom.value,
      balcony: e.target.balcony.value,
      propertyCondition: e.target.propertyCondition.value,
      facing: e.target.facing.value,
      availableFrom: e.target.availableFrom.value,
      rentPriceTitle: e.target.rentPriceTitle.value,
      rentPrice: e.target.rentPrice.value,
      deposit: e.target.deposit.value,
      discount: discount,
      status: e.target.status.value,
      kitchen: e.target.kitchen.value,
      diningSpace: e.target.diningSpace.value,
      furnishing: e.target.furnishing.value,
      gasSupply: e.target.gasSupply.value,
      ccTvCamera: e.target.ccTvCamera.value,
      storeRoom: e.target.storeRoom.value,
      lift: e.target.lift.value,
      waterSupply: e.target.waterSupply.value,
      securityGuard: e.target.securityGuard.value,
      ipsConnection: e.target.ipsConnection.value,
      parkingSpace: e.target.parkingSpace.value,
      floorType: e.target.floorType.value,
      categoryName: e.target.categoryName.value,
      houseDetailsAddress: e.target.houseDetailsAddress.value,
    };

    const formData = new FormData();
    formData.append("bedRoomInfo", houseUpdate.bedRoomInfo);
    formData.append("floorLevel", houseUpdate.floorLevel);
    formData.append("division", houseUpdate.division);
    formData.append("district", houseUpdate.district);
    formData.append("upazila", houseUpdate.upazila);
    formData.append("totalRentRoom", houseUpdate.totalRentRoom);
    formData.append("spaceSize", houseUpdate?.spaceSize);
    formData.append("commonBathRoom", houseUpdate.commonBathRoom);
    formData.append("attachedBathRoom", houseUpdate.attachedBathRoom);
    formData.append("balcony", houseUpdate.balcony);
    formData.append("propertyCondition", houseUpdate.propertyCondition);
    formData.append("facing", houseUpdate.facing);
    formData.append("availableFrom", houseUpdate.availableFrom);
    formData.append("rentPriceTitle", houseUpdate.rentPriceTitle);
    formData.append("rentPrice", houseUpdate.rentPrice);
    formData.append("deposit", houseUpdate.deposit);
    formData.append("discount", houseUpdate.discount);
    formData.append("status", houseUpdate.status);
    formData.append("kitchen", houseUpdate.kitchen);
    formData.append("diningSpace", houseUpdate.diningSpace);
    formData.append("furnishing", houseUpdate.furnishing);
    formData.append("gasSupply", houseUpdate.gasSupply);
    formData.append("ccTvCamera", houseUpdate.ccTvCamera);
    formData.append("storeRoom", houseUpdate.storeRoom);
    formData.append("lift", houseUpdate.lift);
    formData.append("waterSupply", houseUpdate.waterSupply);
    formData.append("securityGuard", houseUpdate.securityGuard);
    formData.append("ipsConnection", houseUpdate.ipsConnection);
    formData.append("parkingSpace", houseUpdate.parkingSpace);
    formData.append("floorType", houseUpdate.floorType);
    formData.append("categoryName", houseUpdate.categoryName);
    formData.append("houseDetailsAddress", houseUpdate.houseDetailsAddress);
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/house/${editHouse?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.error(error.response.data.message);
    }
    e.target.reset();
  };
  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-5xl glass">
          <dic className="flex">
            <div class="grow h-14 ...">
              <h3 className="text-center text-xl border border-spacing-1">
                Update House Informations
              </h3>
            </div>
            <div class="flex-none w-14 h-14 modal-action">
              <label htmlFor="edit-modal" className="text-xl">
                <RxCrossCircled />
              </label>
            </div>
          </dic>

          <div>
            <form
              onSubmit={handleHouseUpdate}
              className="mt-2 product-form px-4 mx-2 py-3 rounded"
            >
              <div className="grid grid-cols-4">
                <div className="">
                  <label>
                    bedRoomInfo:{" "}
                    <span className="text-danger font-bold ">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-green-500"
                    name="bedRoomInfo"
                    required
                    placeholder="Product Name in English"
                    id=""
                    defaultValue={editHouse?.bedRoomInfo}
                  />
                </div>

                <div className="">
                  <label>
                    floorLevel :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-green-500"
                    required
                    name="floorLevel"
                    placeholder="Price"
                    id=""
                    defaultValue={editHouse?.floorLevel}
                  />
                </div>
                <div className="">
                  <label>
                    Division :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-green-500"
                    required
                    name="division"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.division}
                  />
                </div>
                <div className="">
                  <label>
                    district :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-green-500"
                    required
                    name="district"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.district}
                  />
                </div>
                <div className="">
                  <label>
                    upazila :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-green-500"
                    required
                    name="upazila"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.upazila}
                  />
                </div>

                <div className="">
                  <label for="category">
                    totalRentRoom :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="totalRentRoom"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A totalRentRoom
                    </option>

                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option>
                    <option>Five</option>
                    <option>Six</option>
                    <option>Seven</option>
                    <option>Eight</option>
                  </select>
                </div>
                <div className="">
                  <label>
                    spaceSize :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-green-500"
                    required
                    name="spaceSize"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.spaceSize}
                  />
                </div>
                <div className="">
                  <label>
                    commonBathRoom :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-green-500"
                    required
                    name="commonBathRoom"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.commonBathRoom}
                  />
                </div>
                <div className="">
                  <label>
                    attachedBathRoom :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-green-500"
                    required
                    name="attachedBathRoom"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.attachedBathRoom}
                  />
                </div>
                <div className="">
                  <label>
                    balcony :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-green-500"
                    required
                    name="balcony"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.balcony}
                  />
                </div>

                <div className="">
                  <label for="category">
                    propertyCondition :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="propertyCondition"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A propertyCondition
                    </option>

                    <option>Brand New</option>
                    <option>Renovated</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    facing :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="facing"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A facing
                    </option>

                    <option>East</option>
                    <option>West</option>
                    <option>North</option>
                    <option>South</option>
                  </select>
                </div>
                <div className="">
                  <label>
                    availableFrom :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-green-500"
                    required
                    name="availableFrom"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.availableFrom}
                  />
                </div>

                <div className="">
                  <label for="category">
                    rentPriceTitle :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="rentPriceTitle"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A rentPriceTitle
                    </option>

                    <option>Fixed</option>
                    <option>Negotiable</option>
                  </select>
                </div>
                <div className="">
                  <label>
                    rentPrice :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-green-500"
                    required
                    name="rentPrice"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.rentPrice}
                  />
                </div>
                <div className="">
                  <label>
                    deposit :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-green-500"
                    required
                    name="deposit"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHouse?.deposit}
                  />
                </div>

                <div className="">
                  <label>Discount : </label> <br />
                  <input
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                    className="border-2 border-green-500"
                    name="discount"
                    placeholder="discount"
                    id=""
                    defaultValue={editHouse?.discount}
                  />
                </div>
                <div className="col-lg-4">
                  <label for="status">
                    Status : <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="status"
                    id="status"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A Status
                    </option>
                    <option>Available</option>
                    <option>Rented</option>
                  </select>
                </div>

                <div className="">
                  <label for="category">
                    kitchen :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="kitchen"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A kitchen
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    diningSpace :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="diningSpace"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A diningSpace
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    furnishing :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="furnishing"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A furnishing
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    gasSupply :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="gasSupply"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A gasSupply
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    ccTvCamera :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="ccTvCamera"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A ccTvCamera
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    storeRoom :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="storeRoom"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A storeRoom
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    lift : <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="lift"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A lift
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    waterSupply :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="waterSupply"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A waterSupply
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    securityGuard :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="securityGuard"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A securityGuard
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    ipsConnection :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="ipsConnection"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A ipsConnection
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    parkingSpace :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="parkingSpace"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A parkingSpace
                    </option>

                    <option>Car & Bike Both</option>
                    <option>Bike</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    floorType :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="floorType"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A floorType
                    </option>

                    <option>Tilesed</option>
                    <option>Normal</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Category :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="categoryName"
                    id="category"
                    className="border-2 border-green-500"
                  >
                    <option selected disabled>
                      Select A Category
                    </option>
                    <option>Family</option>
                    <option>Bachelor</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="">House Deatails Address:</label>
                <textarea
                  className="border-2 border-green-500"
                  id=""
                  name="houseDetailsAddress"
                  rows="4"
                  defaultValue={editHouse?.houseDetailsAddress}
                />
              </div>

              <div className="d-flex justify-content-end mt-4">
                <div>
                  <input
                    className="btn btn-rose-500 fs-5"
                    type="submit"
                    value="Update House"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default EditHouseModal;
