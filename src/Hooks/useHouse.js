import { useQuery } from "react-query";

const useHouse = () => {
  const {
    data: houses,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("http://localhost:5000/api/v1/product", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [houses, refetch, isLoading];
};

export default useHouse;
