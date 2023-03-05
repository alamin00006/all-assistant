import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const RemoveAdminModal = ({ removeAdmin, refetch }) => {
  const token = localStorage.getItem("token");
  const handleRemoveAdmin = async () => {
    const adminRemove = {
      role: "user",
    };
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/user/${removeAdmin?._id}`,
        adminRemove,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }
  };
  return (
    <div>
      <input type="checkbox" id="remove-admin-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-red-500">
          <h3 className="font-bold text-lg">Are You Sure Remove Admin</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="remove-admin-modal" className="btn">
                Cancel
              </label>
            </div>
            <div onClick={handleRemoveAdmin} className="modal-action">
              <label htmlFor="remove-admin-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveAdminModal;
