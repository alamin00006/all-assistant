import { useQuery } from "react-query";

const useOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("http://localhost:5000/api/v1/order", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [orders, refetch, isLoading];
};

export default useOrders;
