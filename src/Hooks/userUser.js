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
            "https://all-assistant-server.onrender.com/api/v1/user/me",
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
            localStorage.removeItem("token");
            navigate("/login");
          });
      }
    }
    getUser();
  });
  return [user, refetch, isLoading];
};
export default useUser;
