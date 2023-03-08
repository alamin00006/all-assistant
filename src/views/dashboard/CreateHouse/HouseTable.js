import axios from "axios";
import React from "react";

const HouseTable = ({ house, setHouseDelete, houseDelete, refetch }) => {
  console.log(houseDelete?.houseImage);
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://all-assistant-server.onrender.com/api/v1/house/${houseDelete?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      refetch();
      // return toast.success(data.data.message);
    } catch (error) {
      // return toast.error(error.response.data.message);
    }
  };

  return (
    <div onClick={setHouseDelete(house)}>
      <button onClick={handleDelete}>{house?.rentPrice}</button>
    </div>
  );
};

export default HouseTable;
