import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const MakeAdminModal = ({ makeAdmin, refetch }) => {
  const handleMakeAdmin = async () => {
    const adminMake = {
      role: "Admin",
    };
    try {
      if (makeAdmin?.role === "SuperAdmin") {
        return toast.warn("Sorry You SuperAdmin");
      }
      const { data } = await axios.patch(
        `https://all-assistant-server.onrender.com/api/v1/user/${makeAdmin?._id}`,
        adminMake
      );
      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.warn(error.response.data.message);
    }
  };
  return (
    <div>
      <input type="checkbox" id="make-admin-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg">Are You Sure Make Admin</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="make-admin-modal" className="btn">
                Cancel
              </label>
            </div>
            <div onClick={handleMakeAdmin} className="modal-action">
              <label htmlFor="make-admin-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-position" position="top-center" />
    </div>
  );
};

export default MakeAdminModal;
