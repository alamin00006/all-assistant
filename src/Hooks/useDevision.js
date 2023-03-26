import { useEffect, useState } from "react";
import useUser from "./userUser";

const useDivision = () => {
  const [user] = useUser();
  const token = localStorage.getItem("token");
  const [divisions, setDivision] = useState([]);
  useEffect(() => {
    fetch("bd-division.json")
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => setDivision(data))
      .catch((error) => {
        // console.log(error)
      });
  }, [user, token]);

  return [divisions];
};
export default useDivision;
