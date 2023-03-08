import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteHotelModal = ({ deleteHotel, refetch }) => {
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `https://all-assistant-server.onrender.com/api/v1/hotel/${deleteHotel?._id}`,
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

  return (
    <div>
      <input type="checkbox" id="delete-hotel-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg">Are You Sure This Hotel Delete</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="delete-hotel-modal" className="btn">
                Cancel
              </label>
            </div>
            <div onClick={handleDelete} className="modal-action">
              <label htmlFor="delete-hotel-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteHotelModal;
