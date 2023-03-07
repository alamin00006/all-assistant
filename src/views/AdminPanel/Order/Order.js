import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useOrders from "../../../Hooks/useOrders";
import OrderDeleteModal from "./OrderDeleteModal";
import OrderDetailsModal from "./OrderDetailsModal";

const Order = () => {
  const [orders, refetch] = useOrders();
  const [orderDelete, setDeleteOrder] = useState({});
  const [seeOrderDetails, setOrderDetails] = useState({});
  console.log(orders);

  return (
    <div>
      <h1 className="text-center font-bold text-xl mb-6 text-rose-500">
        Our Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job Id</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order._id}</td>
                <td>{order.phone}</td>
                <td>
                  <div className="flex justify-between">
                    <div onClick={() => setOrderDetails(order)}>
                      <label
                        htmlFor="order-details-modal"
                        className="btn bg-sky-500 hover:bg-sky-700 text-white"
                      >
                        Details
                      </label>
                    </div>
                    <div>
                      <div onClick={() => setDeleteOrder(order)}>
                        <label
                          htmlFor="order-delete-modal"
                          className="btn bg-red-600 hover:bg-red-800 text-white"
                        >
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
