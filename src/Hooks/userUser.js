import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { isLoading, refetch } = useQuery(["user", token], () => {
    async function getUser() {
      if (!token) {
        return;
      } else {
        await axios
          .get(
            "http://localhost:5000/api/v1/user/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
            {
              refetchInterval: 6000,
            }
          )
          .then((data) => setUser(data?.data?.data))
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
  return [user, refetch, isLoading];
};
export default useUser;
