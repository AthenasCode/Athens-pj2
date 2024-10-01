import { Filters } from "../types/filter.type";
import { fetcher } from "./api";


export const getFilters = async (): Promise<Filters[]> => {
  const endpoint = "/filterCategories";
  return fetcher(endpoint);
};
