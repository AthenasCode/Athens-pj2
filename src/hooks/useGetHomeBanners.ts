import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getHomeBanners} from "../services/banners.service";
import {Banner } from "../types/banners.type";

// Creamos un hook para obtener los productos del PLP
export const useGetHomeBanners = (): UseQueryResult<Banner[], Error> => {
  return useQuery<Banner[], Error>({
    queryKey: ["banners"],
    queryFn: () => getHomeBanners(),
    
  });
};
