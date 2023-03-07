import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCrossCircled } from "react-icons/rx";

const AddHotelModal = ({ refetch, divisions, districts, upazilas }) => {
  const [discount, setDiscount] = useState("0");
  const [image, setImage] = useState([]);

  const handleHotelCreate = async (e) => {
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

    const isValidFileUploaded = (file) => {
      const validExtensions = [
        "png",
        "jpeg",
        "jpg",
        "PNG",
        "JPG",
        "jpeg",
        "JPEG",
      ];
      const fileExtension = file.type.split("/")[1];

      return validExtensions.includes(fileExtension);
    };

    const file = image[0];

    if (file.size > 5000000) {
      return toast.error("Product Picture size 5MB more than not allowed");
    } else {
      if (isValidFileUploaded(file)) {
        Array.from(image).forEach((item) => {
          formData.append("image", item);
        });
      } else {
        return toast.error("Hotel Picture is not valid");
      }
    }

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/hotel`,
        formData
      );
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }
    e.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="hotel-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-5xl glass">
          <dic className="flex">
            <div class="grow h-14 ...">
              <h3 className="text-center text-xl border border-spacing-1 ">
                Please Input Hotel Informations
              </h3>
            </div>
            <div class="flex-none w-14 h-14 modal-action">
              <label htmlFor="hotel-modal" className="text-xl">
                <RxCrossCircled />
              </label>
            </div>
          </dic>

          <div>
            <form
              onSubmit={handleHotelCreate}
              className="mt-2 product-form px-4 mx-2 py-3 rounded"
            >
              <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1">
                <div className="">
                  <label>
                    Bed Room Info:{" "}
                    <span className="text-danger font-bold ">*</span>
                  </label>
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    name="bedRoomInfo"
                    required
                    placeholder="Input Bed Room Info"
                    id=""
                  />
                </div>

                <div className="">
                  <label>
                    Floor Level :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="floorLevel"
                    placeholder="Floor Level"
                    id=""
                  />
                </div>
                <div className="">
                  <label for="division">
                    Division :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="division"
                    id="division"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select Division
                    </option>

                    {divisions.map((division) => (
                      <option key={division.id}>{division?.name}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label for="district">
                    District :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="district"
                    id="district"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select District
                    </option>

                    {districts.map((district) => (
                      <option key={district.id}>{district?.name}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label for="upazila">
                    Upazila :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="upazila"
                    id="upazila"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select Upazila
                    </option>

                    {upazilas.map((upazila) => (
                      <option key={upazila.id}>{upazila?.name}</option>
                    ))}
                  </select>
                </div>

                <div className="">
                  <label for="category">
                    Total Rent Room :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="totalRentRoom"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Total Rent Room
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
                    Attached Bath Room :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="attachedBathRoom"
                    placeholder="Attached Bath Room"
                    id=""
                  />
                </div>
                <div className="">
                  <label>
                    Balcony :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="balcony"
                    placeholder="Balcony"
                    id=""
                  />
                </div>

                <div className="">
                  <label for="category">
                    Rent Price Title :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="rentPriceTitle"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
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
                    Rent Price :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="rentPrice"
                    placeholder="Rent Price"
                    id=""
                  />
                </div>
                <div className="">
                  <label>
                    Deposit :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="deposit"
                    placeholder="Deposit"
                    id=""
                  />
                </div>

                <div className="">
                  <label>Discount : </label> <br />
                  <input
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    name="discount"
                    placeholder="Discount"
                    id=""
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
                    Kitchen :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="kitchen"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
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
                    DiningSpace :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="diningSpace"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Dining Space
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Furnishing :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="furnishing"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Furnishing
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Gas Supply :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="gasSupply"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A GasSupply
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    ccTv Camera :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="ccTvCamera"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A ccTv Camera
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="">
                  <label for="category">
                    Lift : <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="lift"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Lift
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Water Supply :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="waterSupply"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Water Supply
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Security Guard :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="securityGuard"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Security Guard
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Ips Connection :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="ipsConnection"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A ips Connection
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Parking Space :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="parkingSpace"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Parking Space
                    </option>

                    <option>Car & Bike Both</option>
                    <option>Bike</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Floor Type :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="floorType"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Floor Type
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
                />
              </div>
              <div className="">
                <h1>
                  <label>
                    Upload a Hotels Picture :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>
                </h1>
                <input
                  multiple
                  onChange={(e) => {
                    setImage(e.target.files);
                  }}
                  type="file"
                  className="border-2 border-orange-400 input input-bordered input-sm"
                  required
                  name="houseImage"
                  placeholder="Product Picture"
                  id=""
                />
              </div>

              <div className="d-flex justify-content-end mt-4">
                <div>
                  <input
                    className="btn btn-danger fs-5"
                    type="submit"
                    value="Add Hotel"
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

export default AddHotelModal;
