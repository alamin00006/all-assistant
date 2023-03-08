import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxCrossCircled } from "react-icons/rx";
import useDivision from "../../Hooks/useDevision";

const AddHouseModal = ({ refetch, divisions, districts, upazilas }) => {
  const [discount, setDiscount] = useState("0");
  const [image, setimage] = useState([]);

  const [division] = useDivision();
  console.log(division);

  const handleHouseCreate = async (e) => {
    e.preventDefault();
    const productAdd = {
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
    formData.append("bedRoomInfo", productAdd.bedRoomInfo);
    formData.append("floorLevel", productAdd.floorLevel);
    formData.append("division", productAdd.division);
    formData.append("district", productAdd.district);
    formData.append("upazila", productAdd.upazila);
    formData.append("totalRentRoom", productAdd.totalRentRoom);
    formData.append("spaceSize", productAdd?.spaceSize);
    formData.append("commonBathRoom", productAdd.commonBathRoom);
    formData.append("attachedBathRoom", productAdd.attachedBathRoom);
    formData.append("balcony", productAdd.balcony);
    formData.append("propertyCondition", productAdd.propertyCondition);
    formData.append("facing", productAdd.facing);
    formData.append("availableFrom", productAdd.availableFrom);
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
    formData.append("storeRoom", productAdd.storeRoom);
    formData.append("lift", productAdd.lift);
    formData.append("waterSupply", productAdd.waterSupply);
    formData.append("securityGuard", productAdd.securityGuard);
    formData.append("ipsConnection", productAdd.ipsConnection);
    formData.append("parkingSpace", productAdd.parkingSpace);
    formData.append("floorType", productAdd.floorType);
    formData.append("categoryName", productAdd.categoryName);
    formData.append("houseDetailsAddress", productAdd.houseDetailsAddress);

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
        return toast.error("Product Picture is not valid");
      }
    }

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/house`,
        formData
      );
      toast.success(data?.data?.message);
      refetch();
    } catch (error) {
      return toast.warn(error?.response?.data?.message);
    }
    e.target.reset();
  };

  return (
    <div className="mt-4">
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal mt-24">
        <div className="modal-box w-8/12 max-w-5xl glass">
          <dic className="flex">
            <div class="grow h-14 ...">
              <h3 className="text-center text-xl border border-spacing-1 ">
                Please Inpute House Informations
              </h3>
            </div>
            <div class="flex-none w-14 h-14 modal-action">
              <label htmlFor="my-modal-5" className="text-xl">
                <RxCrossCircled />
              </label>
            </div>
          </dic>

          <div>
            <form
              onSubmit={handleHouseCreate}
              className="mt-2 product-form px-4 mx-2 py-3 rounded"
            >
              <div className=" md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1">
                <div className="">
                  <label>Bed Room Info: </label>
                  <span className="text-danger font-bold ">*</span>
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
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 border-orange-400 input input-bordered input-sm "
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
                      Select A total Rent Room
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
                    Space Size :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="spaceSize"
                    placeholder="SpaceSize"
                    id=""
                  />
                </div>
                <div className="">
                  <label>
                    Common BathRoom :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="number"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="commonBathRoom"
                    placeholder="Common Bath Room"
                    id=""
                  />
                </div>
                <div className="">
                  <label>
                    Attached BathRoom :{" "}
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
                    Property Condition :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="propertyCondition"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
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
                    Facing :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="facing"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
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
                    Available From :{" "}
                    <span className="text-danger fw-bold fs-5">*</span>
                  </label>{" "}
                  <br />
                  <input
                    type="date"
                    className="border-2 border-orange-400 input input-bordered input-sm"
                    required
                    name="availableFrom"
                    placeholder="Available From"
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
                      Select A RentPrice Title
                    </option>

                    <option>Fixed</option>
                    <option>Negotiable</option>
                  </select>
                </div>
                <div className="">
                  <label>
                    RentPrice :{" "}
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
                    Dining Space :{" "}
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
                      Select A diningSpace
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
                      Select A Gas Supply
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                    <option>Cylinder</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    CcTv Camera :{" "}
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
                      Select A CcTv Camera
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="">
                  <label for="category">
                    Store Room :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                  <br />
                  <select
                    style={{ width: "100%", height: "45px" }}
                    required
                    name="storeRoom"
                    id="category"
                    className="border-2 border-orange-400 input input-bordered input-sm"
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
                      Select A Ips Connection
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
                    className="border-2 border-orange-400 input input-bordered input-sm"
                  >
                    <option selected disabled>
                      Select A Category
                    </option>
                    <option>Family</option>
                    <option>Bachelor</option>
                    <option>Office-Space</option>
                    <option>Mess/Hostel</option>
                    <option>Sublet</option>
                  </select>
                </div>
              </div>
              <div>
                <h1>
                  <label for="">House Deatails Address:</label>
                </h1>

                <textarea
                  placeholder="House Area Address"
                  className=" border-2 border-orange-400 input  input-sm  textarea textarea-bordered textarea-xs w-full max-w-xs"
                  id=""
                  name="houseDetailsAddress"
                  rows="4"
                />
              </div>
              <div className="">
                <h1>
                  <label>
                    Upload House Picture :{" "}
                    <span className="text-rose-500 fw-bold fs-5">*</span>
                  </label>
                </h1>

                <input
                  multiple
                  onChange={(e) => {
                    setimage(e.target.files);
                  }}
                  type="file"
                  className="border-2 border-orange-400 input input-bordered input-sm"
                  required
                  name="image"
                  placeholder="productPicture"
                  id=""
                />
              </div>

              <div className="d-flex justify-content-end mt-4">
                <div>
                  <input
                    className="bg-rose-600 text-white px-8 text-lg py-2 rounded-lg cursor-pointer"
                    type="submit"
                    value="Add House"
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

export default AddHouseModal;
