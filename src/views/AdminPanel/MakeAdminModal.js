import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const MakeAdminModal = ({ makeAdmin, refetch }) => {
  const token = localStorage.getItem("token");
  console.log(makeAdmin);
  const handleMakeAdmin = async () => {
    const adminMake = {
      role: "Admin",
    };
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/user/${makeAdmin?._id}`,
        adminMake,
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
    </div>
  );
};

export default MakeAdminModal;
