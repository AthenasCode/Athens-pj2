export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    original_price: number;
    discounted_price: number;
    discount: number;
};
export type CategoryProduct = {
    categorie: string;
    products: Product[];
};