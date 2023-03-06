import React from "react";

const ViewHotelModal = ({ detailsHotel }) => {
  return (
    <div>
      <input type="checkbox" id="view-hotel-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-red-500">
          <h3 className="font-bold text-lg">View This Hotel</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="view-hotel-modal" className="btn">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHotelModal;
