import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProductsPLP } from "../services/plpproducts.service";
import {CategoryProduct } from "../types/product.type";

// Creamos un hook para obtener los productos del PLP
export const useGetPLPProducts = (categorie: string): UseQueryResult<CategoryProduct[], Error> => {
  return useQuery<CategoryProduct[], Error>({
    queryKey: ["plpproducts", {categorie}],
    queryFn: () => getProductsPLP(),
    enabled: !!categorie,
  });
};
