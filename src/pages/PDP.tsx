import { useEffect, useState } from "react";
import { Main } from "../layout/Main";
import { linksbread } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import { useGetPLPProducts } from "../hooks/useGetPLPProducts";

export function PDP() {
  const params = new URLSearchParams(location.search);
  const productId = params.get("product");
  const category = params.get("category") || "";
  const [product, setProduct] = useState<any | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const { data: products, isLoading, isError, isSuccess } = useGetPLPProducts(category!);

  useEffect(() => {
    if (products && isSuccess) {
      const foundProduct = products.flatMap((product: any) => product.products || []).find((product: any) => product.id == productId);
      if (foundProduct) {
        setProduct(foundProduct);
        const sameCategoryProducts = products.find((p: any) => p.categorie === category)?.products || [];
        setRelatedProducts(getRelatedProducts(sameCategoryProducts));
      }
    }
  }, [productId, category, products, isSuccess]); // Removed params from dependencies

  const getRelatedProducts = (products: any[]) => {
    // Shuffle the array, filter out the current product, then limit to 3 related products
    const shuffledProducts = products.filter((p: any) => p.id !== productId).sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, 3);
  };

  return (
    <Main>
      <div className="container">
        <Breadcrumb
          links={[
            linksbread[0],
            {
              label: "Lista de " + category,
              link: "PLP?category=" + category,
            },
            {
              label: product?.title || "",
              link: "PDP?product=" + productId + "&category=" + category,
            },
          ]}
        ></Breadcrumb>
        {isLoading ? (
          <p>Cargando...</p>
        ) : isError ? (
          <Error message={"Error cargando el producto"} />
        ) : (!isLoading && !isError && isSuccess && products && product) ? (
          <>
            <section className="product-info">
              <div className="imgpdp">
                <img src={product.image} alt="Imagen del producto" />
              </div>
              <div>
                <section className="product-main">
                  <h1>{product.title}</h1>
                  <h4>{product.discountPercentage}%</h4>
                  <del>${product.originalPrice.toLocaleString()}</del>
                  <h1>${product.discountedPrice.toLocaleString()}</h1>
                  <p>{product.description}</p>
                  <button className="secondary">AÑADIR AL CARRITO</button>
                </section>
              </div>
            </section>
            <section className="product-characteristics">
              <h1>Caracteristicas del producto</h1>
              <table>
                <tbody>
                  {Object.entries(product).map(([key, value]) => {
                    if (!['id', 'image', 'originalPrice', 'discountPercentage'].includes(key)) {
                      let formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
                      formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
                      return (
                        <tr key={key}>
                          <td>{key === 'discountedPrice' ? 'Precio con descuento' : formattedKey}</td>
                          <td>
                            {key === 'discountedPrice' 
                              ? "$"+(value as number).toLocaleString()
                              : typeof value === 'string' || typeof value === 'number'
                                ? value.toString()
                                : JSON.stringify(value)
                            }
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </section>
            <h1>Productos relacionados</h1>
            <section className="related-items">
              {relatedProducts.map((product: any) => (
                <ProductCard
                  key={product.id}
                  image={product.image || ""}
                  title={product.title || ""}
                  description={""}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  category={category}
                  productId={product.id}
                  discountPercentage={0}
                />
              ))}
            </section>
          </>
        ) : null}
      </div>
    </Main>
  );
}
