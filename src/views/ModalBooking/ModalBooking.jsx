import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ModalBooking = ({ house }) => {
  const handleHouseOrder = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    const orderData = {
      orderHouse: house,
      name,
      phone,
    };
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/order`,
        orderData
      );

      toast.success(data.data.message);
    } catch (error) {
      return toast.warn(error.response.data.message);
    }
    e.target.reset();
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-input" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box bg-amber-100">
          <form onSubmit={(e) => handleHouseOrder(e)}>
            <div className="flex flex-col items-center">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="flex flex-row justify-center items-center w-full">
                <label
                  htmlFor="booking-input"
                  className="btn bg-red-400 hover:bg-red-600 text-white mr-8"
                >
                  cancle
                </label>
                <button className=" my-3 w-32 text-white ml-14">
                  <label
                    htmlFor="booking-input"
                    className="btn bg-red-400 hover:bg-red-600 text-white mr-8"
                  >
                    Submit
                  </label>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
