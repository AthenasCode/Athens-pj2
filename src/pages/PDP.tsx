import { useEffect, useState } from "react";
import { Main } from "../layout/Main";
import { linksbread } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import API from "../api/API";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import spinner from "../../public/images/Loading_2.gif"; // Ruta correcta del spinner

export function PDP() {
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const params = new URLSearchParams(location.search);
  const productId = parseInt(params.get("product") || "0");
  const category = params.get("category") || "";

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await API.getPLPproducts();
        const categoryData = data.find((cat: any) => cat.categorie === category);

        if (categoryData) {
          const foundProduct = categoryData.products.find((prod: any) => prod.id === productId);
          if (foundProduct) {
            setProduct(foundProduct);
            setRelatedProducts(getRelatedProducts(categoryData.products));
          } else {
            setError(true);
            setErrorMessage("Producto no encontrado");
          }
        } else {
          setError(true);
          setErrorMessage("Categoría no encontrada");
        }
      } catch (error) {
        setError(true);
        setErrorMessage("Error en la carga");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, category]); // Solo depende de productId y category

  const getRelatedProducts = (products: any) => {
    return products.filter((prod: any) => prod.id !== productId).slice(0, 3);
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
              label: product?.title || "Producto",
              link: "PDP?product=" + productId + "&category=" + category,
            },
          ]}
        />
        <section className="product-info">
          <div className="imgpdp">
            <img src={product?.image} alt="Imagen del producto" />
          </div>
          <div>
            <section className="product-main">
              <h1>{product?.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="secondary">AÑADIR AL CARRITO</button>
            </section>
          </div>
        </section>
        <section className="product-characteristics">
          <h1>Características del producto</h1>
          {loading ? (
            <img src={spinner} alt="Cargando productos relacionados..." />
          ) : error ? (
            <Error message={errorMessage} />
          ) : (
          <table>
            <tbody>
              {Object.entries(product || {}).map(([key, value]) => {
                if (
                  ![
                    "id",
                    "image",
                    "originalPrice",
                    "discountedPrice",
                    "discountPercentage",
                  ].includes(key)
                ) {
                  const formattedKey = key.replace(/([A-Z])/g, " $1").trim();
                  return (
                    <tr key={key}>
                      <td>
                        {formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1)}
                      </td>
                      <td>{value as React.ReactNode}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          )}
        </section>
        <h1>Productos relacionados</h1>
        <section className="related-items">
          {loading ? (
            <img src={spinner} alt="Cargando productos relacionados..." />
          ) : error ? (
            <Error message={errorMessage} />
          ) : (
            relatedProducts.map((prod: any) => (
              <ProductCard
                key={prod.id}
                image={prod.image}
                title={prod.title}
                description={""}
                originalPrice={prod.originalPrice}
                discountedPrice={prod.discountedPrice}
                category={category}
                productId={prod.id}
                discountPercentage={0}
              />
            ))
          )}
        </section>
      </div>
    </Main>
  );
}
