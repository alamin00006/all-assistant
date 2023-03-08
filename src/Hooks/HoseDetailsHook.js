import { useQuery } from "react-query";

const HoseDetailsHook = (id) => {
  const {
    data: house,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch(`https://all-assistant-server.onrender.com/api/v1/house/${id}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  return [house, refetch, isLoading];
};

export default HoseDetailsHook;
