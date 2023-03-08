import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCrossCircled } from "react-icons/rx";

const EdiHotelModal = ({ editHotel, refetch }) => {
  const [discount, setDiscount] = useState("0");

  const handleUpdateHotel = async (e) => {
    e.preventDefault();
    const productAdd = {
      bedRoomInfo: e.target.bedRoomInfo.value,
      floorLevel: e.target.floorLevel.value,
      division: e.target.division.value,
      district: e.target.district.value,
      upazila: e.target.upazila.value,
      totalRentRoom: e.target.totalRentRoom.value,
      attachedBathRoom: e.target.attachedBathRoom.value,
      balcony: e.target.balcony.value,
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
      lift: e.target.lift.value,
      waterSupply: e.target.waterSupply.value,
      securityGuard: e.target.securityGuard.value,
      ipsConnection: e.target.ipsConnection.value,
      parkingSpace: e.target.parkingSpace.value,
      floorType: e.target.floorType.value,
      hotelDetailsAddress: e.target.hotelDetailsAddress.value,
    };
    console.log(productAdd);
    const formData = new FormData();
    formData.append("bedRoomInfo", productAdd.bedRoomInfo);
    formData.append("floorLevel", productAdd.floorLevel);
    formData.append("division", productAdd.division);
    formData.append("district", productAdd.district);
    formData.append("upazila", productAdd.upazila);
    formData.append("totalRentRoom", productAdd.totalRentRoom);
    formData.append("attachedBathRoom", productAdd.attachedBathRoom);
    formData.append("balcony", productAdd.balcony);
    formData.append("rentPriceTitle", productAdd.rentPriceTitle);
    formData.append("rentPrice", productAdd.rentPrice);
    formData.append("deposit", productAdd.deposit);
    formData.append("discount", productAdd.discount);
    formData.append("status", productAdd.status);
    formData.append("kitchen", productAdd.kitchen);
    formData.append("diningSpace", productAdd.diningSpace);
    formData.append("furnishing", productAdd.furnishing);
    formData.append("gasSupply", productAdd.gasSupply);
    formData.append("ccTvCamera", productAdd.ccTvCamera);
    formData.append("lift", productAdd.lift);
    formData.append("waterSupply", productAdd.waterSupply);
    formData.append("securityGuard", productAdd.securityGuard);
    formData.append("ipsConnection", productAdd.ipsConnection);
    formData.append("parkingSpace", productAdd.parkingSpace);
    formData.append("floorType", productAdd.floorType);
    formData.append("hotelDetailsAddress", productAdd.hotelDetailsAddress);

    try {
      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/hotel/${editHotel?._id}`,
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
      <input type="checkbox" id="edit-hotel-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-5xl glass">
          <dic className="flex">
            <div class="grow h-14 ...">
              <h3 className="text-center text-xl border border-spacing-1 ">
                Update Hotel Informations
              </h3>
            </div>
            <div class="flex-none w-14 h-14 modal-action">
              <label htmlFor="edit-hotel-modal" className="text-xl">
                <RxCrossCircled />
              </label>
            </div>
          </dic>

          <div>
            <form
              onSubmit={handleUpdateHotel}
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
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    name="bedRoomInfo"
                    required
                    placeholder="Product Name in English"
                    id=""
                    defaultValue={editHotel?.bedRoomInfo}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="floorLevel"
                    placeholder="Price"
                    id=""
                    defaultValue={editHotel?.floorLevel}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="division"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.division}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="district"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.district}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="upazila"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.upazila}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.totalRentRoom}
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
                    attachedBathRoom :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="attachedBathRoom"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.attachedBathRoom}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="balcony"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.balcony}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.rentPriceTitle}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="rentPrice"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.rentPrice}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="deposit"
                    placeholder="Quantity"
                    id=""
                    defaultValue={editHotel?.deposit}
                  />
                </div>

                <div className="">
                  <label>Discount : </label> <br />
                  <input
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    name="discount"
                    placeholder="discount"
                    id=""
                    defaultValue={editHotel?.discount}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.status}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.kitchen}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.diningSpace}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.furnishing}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.gasSupply}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.ccTvCamera}
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
                    lift : <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="lift"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.lift}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.waterSupply}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.securityGuard}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.ipsConnection}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.parkingSpace}
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    defaultValue={editHotel?.floorType}
                  >
                    <option selected disabled>
                      Select A floorType
                    </option>

                    <option>Tilesed</option>
                    <option>Normal</option>
                  </select>
                </div>
              </div>
              <div>
                <h1>
                  <label for="">Hotel Deatails Address:</label>
                </h1>
                <textarea
                  className="border-2  border-orange-400 input  input-sm  textarea textarea-bordered textarea-xs w-full max-w-xs"
                  id=""
                  name="hotelDetailsAddress"
                  rows="4"
                  defaultValue={editHotel?.hotelDetailsAddress}
                />
              </div>
              <div className="d-flex justify-content-end mt-4">
                <div>
                  <input
                    className="btn btn-danger fs-5"
                    type="submit"
                    value="Update Hotel"
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

export default EdiHotelModal;
