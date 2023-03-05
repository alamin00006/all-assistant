import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const useAllUser = () => {
  const [allUser, setallUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { isLoading, refetch } = useQuery([token], () => {
    async function getUser() {
      if (!token) {
        return;
      } else {
        await axios
          .get(
            "http://localhost:5000/api/v1/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
            {
              refetchInterval: 6000,
            }
          )
          .then((data) => setallUser(data))
          .catch((err) => {
            console.log(err);
            localStorage.removeItem("token");
            navigate("/login");
            window.location.reload(false);
          });
      }
    }
    getUser();
  });
  return [allUser, refetch, isLoading];
};
export default useAllUser;
