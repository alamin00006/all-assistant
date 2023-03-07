import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const useAllUser = () => {
  const [allUser, setallUser] = useState({});

  const { isLoading, refetch } = useQuery([], () => {
    async function getUser() {
      await axios
        .get(
          "https://all-assistant-sever-muhib95.vercel.app/api/v1/user",

          {
            refetchInterval: 6000,
          }
        )
        .then((data) => setallUser(data))
        .catch((err) => {
          return toast.warn(err.response.data.message);
        });
    }
    getUser();
  });
  return [allUser, refetch, isLoading];
};
export default useAllUser;
