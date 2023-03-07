import { useEffect, useState } from "react";

const useDivision = () => {
  const token = localStorage.getItem("token");
  const [divisions, setDivision] = useState([]);
  useEffect(() => {
    fetch("bd-division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data));
  }, [token]);

  return [divisions];
};
export default useDivision;
