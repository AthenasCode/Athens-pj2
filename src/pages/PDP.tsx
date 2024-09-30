import { useEffect, useState } from "react";
import { Main } from "../layout/Main";
import { linksbread } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import API from "../api/API";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";

export function PDP() {
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState<any>();
  const params = new URLSearchParams(location.search);
  const productId = parseInt(params.get("product") || "0");
  const category = params.get("category") || "";
  const getRelatedProducts = (products:any) => {
    const relatedProducts = products.filter((product:any) => product.id !== productId);
    return relatedProducts.slice(0, 3);
  };
  useEffect(() => {
    API.getPLPproducts()
      .then((data) => {
        const categoryData = data.find((category: any) => category.categorie === params.get("category"));
        
        if (categoryData) {
          const foundProduct = categoryData.products.find((product: any) => product.id === productId);
          
          if (foundProduct) {
            setProduct(foundProduct);
            setRelatedProducts(getRelatedProducts(categoryData.products));
          } 
        } else {
          setError(true);
          setErrorMessage("Categoría no encontrada");
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params, productId]);
  return (
    <Main>
      <div className="container">
        <Breadcrumb
          links={[
            linksbread[0],
            {
              label: "Descripcion del producto",
              link: "PDP?product=" + productId + "&category=" + category,
            },
          ]}
        ></Breadcrumb>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <Error message={errorMessage} />
        ) : (
          <>
            <section className="product-info">
              <div className="imgpdp">
                <img src={product.image} alt="Imagen del Apple Watch" />
              </div>
              <div>
                <section className="product-main">
                  <h1>{product.title}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                  <button className="secondary">AÑADIR AL CARRITO</button>
                </section>
              </div>
            </section>
            <section className="product-characteristics">
              <h1>Caracteristicas del producto</h1>
              <table>
                <tbody>
                  {Object.entries(product).map(([key, value]) => {
                    if (!['id', 'image', 'originalPrice', 'discountedPrice', 'discountPercentage'].includes(key)) {
                      const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
                      return (
                        <tr key={key}>
                          <td>{formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1)}</td>
                          <td>{value as React.ReactNode}</td>
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
                  image={"" + product.image}
                  title={"" + product.title}
                  description={""}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  category={category}
                  productId={product.id} discountPercentage={0}                />
              ))}
            </section>
          </>
        )}
      </div>
    </Main>
  );
}
