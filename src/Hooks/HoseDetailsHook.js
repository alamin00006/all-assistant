import { useEffect, useState } from "react";

const HoseDetailsHook = (id) => {
  const [houseDetails, setDetails] = useState([]);
  useEffect(() => {
    fetch("bd-houseinfo.json")
      .then((res) => res.json())
      .then((data) => console.log(data.houses));
  }, []);
};

export default HoseDetailsHook;
