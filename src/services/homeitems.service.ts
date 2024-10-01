import { Product } from "../types/product.type";
import { fetcher } from "./api";

export const getHomePageItem = async (courseId: number): Promise<Product> => {
  const endpoint = `/homepageItems/${courseId}`;
  return fetcher(endpoint);
};

export const getHomePageItems = async (): Promise<Product[]> => {
  const endpoint = "/homepageItems";
  return fetcher(endpoint);
};
