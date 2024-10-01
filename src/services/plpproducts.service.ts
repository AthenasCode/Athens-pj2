import {CategoryProduct} from "../types/product.type";
import { fetcher } from "./api";


export const getProductsPLP = async (): Promise<CategoryProduct[]> => {
  const endpoint = "/productsPLP";
  return fetcher(endpoint);
};
