import React from "react";

const ModalBooking = () => {
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="booking-input" className="btn">
        Booking
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-input" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box bg-amber-100">
          <form>
            <div className="flex flex-col items-center">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex flex-row justify-center items-center w-full">
                <label
                  htmlFor="booking-input"
                  className="btn bg-red-400 hover:bg-red-600 text-white mr-8"
                >
                  cancle
                </label>
                <button className="btn bg-lime-500 hover:bg-lime-300 my-3 w-32 text-white ml-14">
                  Submit
                </button>
              </div>
            </div>
          </form>

          {/* <div className="modal-action">
            <label
              htmlFor="booking-input"
              className="btn bg-red-400 hover:bg-red-600 text-white"
            >
              cancle
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
