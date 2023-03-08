import { useQuery } from "react-query";

const useHotels = () => {
  const {
    data: hotels,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("http://localhost:5000/api/v1/hotel", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [hotels, refetch, isLoading];
};

export default useHotels;
