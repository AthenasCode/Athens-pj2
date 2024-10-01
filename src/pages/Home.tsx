import { Main } from "../layout/Main";
import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";
import { adImage,linksbread } from "../utils/data";
import AdImage from "../components/AdImage";
import Banner from "../components/Banner";
import { useGetHomeProducts } from "../hooks/useGetHomeProducts";
import { Product } from "../types/product.type";
import spinner from "../../public/images/Loading_2.gif";  
import Error from "../components/Error";
//import { useEffect, useState } from "react";
//import API from "../api/API";
export function Home() {
  //const [homepageItems2, setHomepageItems] = useState<Product[]>([]);
  //const [isLoading, setLoading] = useState(true);
  //const [isError, setError] = useState(false);
  //useEffect(() => {
  //  API.getHomePageItems().then((data) => {
  //    setHomepageItems(data);
  //    setLoading(false);
  //  }).catch(() => {
  //    setLoading(false);
  //    setError(true);
  //  });
  //}, []);
  const { isLoading, isSuccess, isError, data: homepageItems } = useGetHomeProducts();

  return (
    <Main>

      <Banner />
      <Breadcrumb links={[linksbread[0]]}/>
      <section className="container">
        <h2>¡Mira los mejores productos que tenemos!</h2>
        <div className="productsList">
          {isLoading && (
            <img src={spinner} alt="Cargando..." />
          ) }
          { isError && (
            <Error message={"Error cargando los productos"} />
          )}
          {!isLoading && !isError && isSuccess && homepageItems && (
            homepageItems.map((product: Product) => (
              <Card // Asegúrate de añadir una key única
                image={"" + product.image}
                title={"" + product.title}
                description={"" + product.description}
                price={product.original_price}
                discountPrice={product.discounted_price}
                buttonLink={"#"}
              />
            ))
          )}
        </div>
      </section>

      <section>
        <AdImage
          image={adImage[0].image}
          text={adImage[0].text}
          buttonLink={adImage[0].buttonLink}
        />
      </section>
    </Main>
  );
}
