import { useEffect, useState } from "react";

const useDistrict = () => {
  const token = localStorage.getItem("token");
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("bd-districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data));
  }, [token]);

  return [districts];
};
export default useDistrict;
