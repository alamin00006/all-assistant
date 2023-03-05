import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAllUser from "../../Hooks/useAllUser";
import MakeAdminModal from "./MakeAdminModal";
import RemoveAdminModal from "./RemoveAdminModal";

const UserManage = () => {
  const [allUser, refetch] = useAllUser();

  const [makeAdmin, setMakeAdmin] = useState({});
  const [removeAdmin, setRemoveAdmin] = useState({});

  useEffect(() => {
    if (!allUser?.data?.data.length === 0) {
      refetch();
    }
  }, [allUser, refetch]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.data?.data?.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div className="flex justify-between">
                    <div onClick={() => setMakeAdmin(user)}>
                      <label
                        htmlFor="make-admin-modal"
                        className="bg-green-600 text-white cursor-pointer px-3 py-2 rounded-lg"
                      >
                        Make Admin
                      </label>
                    </div>
                    <div onClick={() => setRemoveAdmin(user)}>
                      <label
                        htmlFor="remove-admin-modal"
                        className="bg-rose-600 text-white cursor-pointer px-3 py-2 rounded-lg"
                      >
                        Remove Admin
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            <MakeAdminModal makeAdmin={makeAdmin} refetch={refetch} />
            <RemoveAdminModal removeAdmin={removeAdmin} refetch={refetch} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManage;
