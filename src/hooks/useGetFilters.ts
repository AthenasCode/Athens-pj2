import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getFilters} from "../services/filters.service";
import { Filters } from "../types/filter.type";

// Creamos un hook para obtener los productos del PLP
export const useGetFilters = (categorie: string): UseQueryResult<Filters[], Error> => {
  return useQuery<Filters[], Error>({
    queryKey: ["filters", {categorie}],
    queryFn: () => getFilters(),
    enabled: !!categorie,
  });
};
