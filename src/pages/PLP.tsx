// src/pages/PLP.tsx
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard"; // Importa el componente ProductCard
import { Main } from "../layout/Main";
import { Filter } from "../components/Filter";
import { linksbread } from "../utils/data"; // Importar el archivo de filtros
import { filterCategories } from "../utils/data"; // Importar tipo y filtros
import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import { CategoryProduct } from "../types/product.type";
import { Filters } from "../types/filter.type";
import { useGetPLPProducts } from "../hooks/useGetPLPProducts";
//import { useGetFilters } from "../hooks/useGetFilters";
//import API from "../api/API";
// Importa el componente Error y la imagen del spinner
import Error from "../components/Error";
import spinner from "../../public/images/Loading_2.gif"; // Asegúrate de que la ruta sea correcta
import { adImage} from "../utils/data";
import AdImage from "../components/AdImage";

export function PLP() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") ; // Validar que category sea de tipo CategoryType
  //const [error, setError] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");
  //const [loading, setLoading] = useState(true);
  //const [products, setProducts] = useState<Product[]>([]);
  //const [selectedCategory, setSelectedCategory] = useState<Product | any>(undefined);
  //const [categoryFilters, setCategoryFilters] = useState<any[]>([]);
 //const [Filters, setFilters] = useState<any[]>([]);

 //useEffect(() => {
 //  API.getFilterCategories().then((data) => {
 //    setFilters(data);
 //    setLoading(false);
 //  }).catch((error) => {
 //    setLoading(false);
 //    setError(true);
 //    setErrorMessage(error.message);
 //  });
 //}, []);
 const { data: products, isLoading, isError, isSuccess } = useGetPLPProducts(category!);
// const { data: filterCategories } = useGetFilters(category!);

 const [selectedCategory, setSelectedCategory] = useState<CategoryProduct >();
 const [categoryFilters, setCategoryFilters] = useState<any>([]);

 useEffect(() => {
   if (products && isSuccess) {
    const found = products.find((cat: CategoryProduct) => cat.categorie === category);

    setSelectedCategory(found);

    const filters = category&&filterCategories ?  filterCategories.find((cat: Filters) => cat.categoria === category) : null;
    if (filters){
      setCategoryFilters(filters.filtros);
    }
   }
 }, [products, category, isSuccess]);
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
        {isError && (
          <Error message={"Error cargando la lista de productos"} />
        )}
        { isLoading && (
          <img src={spinner} alt="Cargando..." />
        )}
        { !isLoading && !isError && isSuccess && products && (
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
                {
                selectedCategory?.products.map((product: any) => {

                  return (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      description={"Lorem ipsum dolor sit amet"}
                      originalPrice={product.originalPrice}
                      discountedPrice={product.discountedPrice}
                      discountPercentage={product.discountPercentage}
                      category={selectedCategory?.categorie}
                      productId={product.id}
                    />
                  );
                })}
              </div>
            </section>
          </>
        )}
      </main>
      <AdImage
        image={adImage[1].image}
        text={adImage[1].text}
        buttonLink={adImage[1].buttonLink}
      />
    </Main>
  );
}

export default PLP;
