import { useEffect, useState } from "react";

const useUpazila = () => {
  const token = localStorage.getItem("token");
  const [upazilas, setUpazilas] = useState([]);
  useEffect(() => {
    fetch("bd-upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data));
  }, [token]);

  return [upazilas];
};
export default useUpazila;
