import { useEffect, useState } from "react";
import useUser from "./userUser";

const useDivision = () => {
  const [user] = useUser();
  const token = localStorage.getItem("token");
  const [divisions, setDivision] = useState([]);
  useEffect(() => {
    fetch("bd-division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data));
  }, [token, user]);

  return [divisions];
};
export default useDivision;
