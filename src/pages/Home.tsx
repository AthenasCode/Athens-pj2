import { Main } from "../layout/Main";
import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";
import { adImage,linksbread } from "../utils/data";
import AdImage from "../components/AdImage";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import API from "../api/API";
import { Product } from "../types/product.type";
import spinner from "../../public/images/Loading_2.gif";
export function Home() {
  const [homepageItems, setHomepageItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    API.getHomePageItems().then((data) => {
      setHomepageItems(data);
      setLoading(false);
    });
  }, []);
  return (
    <Main>

      <Banner />
      <Breadcrumb links={[linksbread[0]]}/>
      <section className="container">
        <h2>¡Mira los mejores productos que tenemos!</h2>
        <div className="productsList">
          {loading ? (
            <img src={spinner} alt="Cargando..." />
          ) : (
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
