// src/pages/PLP.tsx
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // Importa el componente ProductCard
import { Main } from "../layout/Main";
import { Filter } from "../components/Filter";
import { linksbread } from "../utils/data"; // Importar el archivo de filtros
import { CategoryType, filterCategories } from "../utils/data"; // Importar tipo y filtros
import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import { Product } from "../types/product.type";
import API from "../api/API";
// Importa el componente Error y la imagen del spinner
import Error from "../components/Error";
import spinner from "../../public/images/Loading_2.gif"; // Asegúrate de que la ruta sea correcta

export function PLP() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") as CategoryType | null; // Validar que category sea de tipo CategoryType
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Product | any>(undefined);
  const [categoryFilters, setCategoryFilters] = useState<any[]>([]);

  useEffect(() => {
    API.getPLPproducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
        
        const found = data.find((cat: any) => cat.categorie === category);
        setSelectedCategory(found);
        
        const filters = category ? filterCategories[category] : [];
        setCategoryFilters(filters);
      })
      .catch((error: { message: string }) => {
        setLoading(false);
        setError(true);
        setErrorMessage(error.message);
      });
  }, [category]);
  return (
    <Main>
      <Breadcrumb
        links={[
          linksbread[0],
          {
            label: "Lista de " + category,
            link: "PLP?category=" + category,
          },
        ]}
      />
      <main className="main-content container">
        {error ? (
          <Error message={errorMessage} />
        ) : loading ? (
          <img src={spinner} alt="Cargando..." />
        ) : (
          <>
            <aside className="filtro">
              <Filter filters={categoryFilters} />
            </aside>
            <section className="product-list">
              <div className="partesup">
                <p>{selectedCategory?.products.length} resultados de {products.length} productos</p>

                <select>
                  <option>Ordenar por: Relevancia</option>
                  <option>Fecha de lanzamiento</option>
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                </select>
              </div>
              <div className="products">
                {selectedCategory?.products.map((product: any) => {
                  return (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      description={"Lorem ipsum dolor sit amet"}
                      originalPrice={product.originalPrice}
                      discountedPrice={product.discountedPrice}
                      discountPercentage={product.discountPercentage}
                    />
                  );
                })}
              </div>
            </section>
          </>
        )}
      </main>
    </Main>
  );
}

export default PLP;
