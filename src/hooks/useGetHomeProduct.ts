import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getHomePageItem } from "../services/homeitems.service";
import { Product } from "../types/product.type";

export const useGetHomeProduct = (
  productId: number
): UseQueryResult<Product, Error> => {
  return useQuery<Product, Error>({
    queryKey: ["homeproduct", { productId }],
    queryFn: () => getHomePageItem(productId),
    enabled: !!productId,
  });
};
