import { useQuery } from "react-query";

const useHotels = () => {
  const {
    data: hotels,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("https://all-assistant-sever-muhib95.vercel.app/api/v1/hotel", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [hotels, refetch, isLoading];
};

export default useHotels;
