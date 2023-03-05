import React, { useEffect, useState } from "react";
import useAllUser from "../../Hooks/useAllUser";
import useUser from "../../Hooks/userUser";
import MakeAdminModal from "./MakeAdminModal";
import RemoveAdminModal from "./RemoveAdminModal";

const UserManage = () => {
  const [allUser, refetch] = useAllUser();
  const [user, refetchSingle] = useUser();
  const [makeAdmin, setMakeAdmin] = useState({});
  const [removeAdmin, setRemoveAdmin] = useState({});
  console.log(user);
  useEffect(() => {
    if (!allUser?.data?.data.length === 0 || !user?.email) {
      refetch();
      refetchSingle();
    }
  }, [allUser, refetch, user, refetchSingle]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-amber-200">
              <th></th>
              <th>Name</th>
              <th>EMAIL</th>
              <th>Role</th>
              <th>Status</th>
              <th>CreatedAt</th>
              <th>UpdatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.data?.data?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
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
