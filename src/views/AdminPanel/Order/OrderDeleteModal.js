import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ orderDelete, refetch }) => {
  const handleOrderDelete = async () => {
    try {
      const data = await axios.delete(
        `https://all-assistant-server.onrender.com/api/v1/order/${orderDelete?._id}`,
        {},
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
  };
  console.log(orderDelete);
  return (
    <div>
      <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg">Are You Sure This Order Delete</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="order-delete-modal" className="btn mr-4">
                Cancel
              </label>
            </div>
            <div onClick={handleOrderDelete} className="modal-action">
              <label htmlFor="order-delete-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
