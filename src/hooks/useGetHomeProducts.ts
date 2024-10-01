import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getHomePageItems } from "../services/homeitems.service";
import { Product } from "../types/product.type";

export const useGetHomeProducts = (): UseQueryResult<Product[], Error> => {
  return useQuery<Product[], Error>({
    queryKey: ["homeproducts"],
    queryFn: () => getHomePageItems(),
  });
};
