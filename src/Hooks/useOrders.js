import { useQuery } from "react-query";

const useOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("https://all-assistant-sever-muhib95.vercel.app/api/v1/order", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [orders, refetch, isLoading];
};

export default useOrders;
