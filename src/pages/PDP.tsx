import { useEffect, useState } from "react";
import { Main } from "../layout/Main";
import { linksbread } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import { useGetPLPProducts } from "../hooks/useGetPLPProducts"; 
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import spinner from "../../public/images/Loading_2.gif";

export function PDP() {
  const params = new URLSearchParams(location.search);
  const productId = parseInt(params.get("product") || "0");
  const category = params.get("category") || "";
  
  const { data: products, isLoading, isError, error } = useGetPLPProducts(category);
  
  const [product, setProduct] = useState<any>();
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    if (products) {
      const categoryData = products.find((cat) => cat.categorie === category);
      
      if (categoryData) {
        const foundProduct = categoryData.products.find((prod: any) => prod.id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(categoryData.products, productId));
        }
      }
    }
  }, [products, productId, category]);

  const getRelatedProducts = (products: any[], currentProductId: number) => {
    return products.filter((prod: any) => prod.id !== currentProductId).slice(0, 3);
  };

  // Función para agregar al carrito
  const addToCart = () => {
    if (!product) return; // Verificar que el producto esté disponible

    const existingCart = localStorage.getItem('cart'); // Obtener carrito de localStorage
    let cart = existingCart ? JSON.parse(existingCart) : []; // Parsear el carrito o iniciar uno vacío

    // Crear un nuevo producto para agregar al carrito
    const productToAdd = {
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description,
      originalPrice: product.originalPrice,
      discountedPrice: product.discountedPrice,
      category,
      quantity: 1, // Cantidad predeterminada
    };

    // Verificar si el producto ya existe en el carrito
    const index = cart.findIndex((prod: any) => prod.id === product.id);
    if (index >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[index].quantity += 1;
    } else {
      // Si no está en el carrito, agregarlo
      cart.push(productToAdd);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Producto añadido al carrito: ${product.title}`);
    console.log('Carrito actualizado:', cart);
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                amet modi voluptatibus doloremque nihil obcaecati! Impedit,
                vitae? Expedita nesciunt exercitationem ea minus sit? Minima
                voluptate, porro corrupti ea eum impedit..
              </p>
              {/* Botón con la funcionalidad de agregar al carrito */}
              <button className="secondary" onClick={addToCart}>AÑADIR AL CARRITO</button>
            </section>
          </div>
        </section>
        <section className="product-characteristics">
          <h1>Características del producto</h1>
          {isLoading ? (
            <img src={spinner} alt="Cargando productos relacionados..." />
          ) : isError ? (
            <Error message={error.message} />
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
          {isLoading ? (
            <img src={spinner} alt="Cargando productos relacionados..." />
          ) : isError ? (
            <Error message={error.message} />
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
