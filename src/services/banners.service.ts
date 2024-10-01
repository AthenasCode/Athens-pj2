import {Banner} from "../types/banners.type";
import { fetcher } from "./api";


export const getHomeBanners = async (): Promise<Banner[]> => {
  const endpoint = "/banner";
  return fetcher(endpoint);
};
