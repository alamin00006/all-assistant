import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useOrders from "../../../Hooks/useOrders";
import OrderDeleteModal from "./OrderDeleteModal";
import OrderDetailsModal from "./OrderDetailsModal";

const Order = () => {
  const [orders, refetch] = useOrders();
  const [orderDelete, setDeleteOrder] = useState({});
  const [seeOrderDetails, setOrderDetails] = useState({});

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
            {orders?.data.map((order) => (
              <tr key={order._id}>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div className="flex justify-between">
                    <div onClick={() => setOrderDetails(order)}>
                      <label htmlFor="order-details-modal" className="">
                        Details
                      </label>
                    </div>
                    <div>
                      <div onClick={() => setDeleteOrder(order)}>
                        <label htmlFor="order-delete-modal" className="">
                          <RiDeleteBin6Line className="h-6 w-6" />
                        </label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            <OrderDeleteModal orderDelete={orderDelete} refetch={refetch} />
            <OrderDetailsModal
              seeOrderDetails={seeOrderDetails}
              refetch={refetch}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
