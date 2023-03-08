import { useQuery } from "react-query";

const useHouse = () => {
  const {
    data: houses,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("https://all-assistant-sever-muhib95.vercel.app/api/v1/house", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [houses, refetch, isLoading];
};

export default useHouse;
