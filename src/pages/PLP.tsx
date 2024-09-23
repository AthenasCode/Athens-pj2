// src/pages/PLP.tsx
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // Importa el componente ProductCard
import { Main } from "../layout/Main";
import { Filter } from "../components/Filter";
import { linksbread, productsplp } from "../utils/data"; // Importar el archivo de filtros
import { filterCategories, CategoryType } from "../utils/data"; // Importar tipo y filtros
import Breadcrumb from "../components/Breadcrumb";

export function PLP() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category') as CategoryType | null; // Validar que category sea de tipo CategoryType

  // Si la categoría no es válida, podemos manejarlo asignando un valor por defecto o mostrar un error
  const selectedCategory = productsplp.find((cat) => cat.categorie === category);
  const categoryFilters = category ? filterCategories[category] : [];

  return (
    <Main>
      <Breadcrumb links={[linksbread[0],{label:"Lista de "+category, link:"/Athens-pj2/PLP?category="+category} ]}/>
      <main className="main-content container">
        
        <aside className="filters">
          <Filter filters={categoryFilters} />
        </aside>
        <section className="product-list">
          <div className="partesup">
                <p>x resultados de y</p>

                <select>
                    <option>Ordenar por: Relevancia</option>
                    <option>Fecha de lanzamiento</option>
                    <option>Precio: menor a mayor</option>
                    <option>Precio: mayor a menor</option>
                </select>
            </div>
          <div className="products">
          {selectedCategory?.products.map((product) => {

            return (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={
                  "Lorem ipsum dolor sit amet"
                }
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                discountPercentage={product.discountPercentage}
              />
            );
          })}
          </div>
        </section>
        
      </main>
    </Main>
  );
}

export default PLP;
