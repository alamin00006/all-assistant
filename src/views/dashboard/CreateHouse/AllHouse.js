import React, { useState } from "react";
import useHouse from "../../../Hooks/useHouse";
import HouseTable from "./HouseTable";

const AllHouse = () => {
  const [houses, isLoading, refetch] = useHouse();
  console.log(houses);
  const [houseDelete, setHouseDelete] = useState(null);
  return (
    <div>
      {houses?.data?.map((house) => (
        <HouseTable
          refetch={refetch}
          house={house}
          setHouseDelete={setHouseDelete}
          houseDelete={houseDelete}
        />
      ))}
    </div>
  );
};

export default AllHouse;
