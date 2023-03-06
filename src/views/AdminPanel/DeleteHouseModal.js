import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteHouseModal = ({ deleteHouse, refetch }) => {
  console.log(deleteHouse);
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/v1/house/${deleteHouse?._id}`,
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
      <input type="checkbox" id="deletemodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  bg-slate-200">
          <h3 className="font-bold text-lg">
            Are You Sure This Product Delete
          </h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="deletemodal" className="btn">
                Cancel
              </label>
            </div>
            <div onClick={handleDelete} className="modal-action">
              <label htmlFor="deletemodal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteHouseModal;
