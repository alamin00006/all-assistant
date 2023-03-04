import axios from "axios";
import React from "react";
// import { toast } from "react-toastify";

const Order = () => {
  const handleOrderCreate = async (e) => {
    e.preventDefault();

    const name = e.target?.name?.value;
    const email = e.target?.email?.value;
    const phone = e.target?.phone?.value;

    const orderData = {
      //   orderItems: cart,
      //   user: user?.email,
      name: name,
      email: email,
      phone: phone,
    };

    try {
      await axios.post("http://localhost:5000/api/v1/order", orderData);

      //  toast.success(data.data.message)
      localStorage.removeItem("cartItems");

      // window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Order page</h1>
    </div>
  );
};

export default Order;
