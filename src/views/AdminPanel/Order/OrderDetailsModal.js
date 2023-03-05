import React from "react";

const OrderDetailsModal = ({ seeOrderDetails }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="order-details-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-red-500">
          <h3 className="font-bold text-lg">Order Deatails</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="order-details-modal" className="btn">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
