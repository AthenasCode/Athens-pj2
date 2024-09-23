import { Main } from "../layout/Main";
import Card from "../components/Card";
import { adImage, homepageItems } from "../utils/data";
import AdImage from "../components/AdImage";
import Banner from "../components/banner";
export function Home() {
  return (
    <Main>
      <Banner />
      <section className="container">



        <h2>¡Mira los mejores productos que tenemos!</h2>
        <div className="productsList">
          {homepageItems.map((product) => (
            <Card
              image={"" + product.image}
              title={"" + product.title}
              description={"" + product.description}
              price={product.original_price}
              discountPrice={product.discounted_price}
              buttonLink={"#"}
            />
          ))}
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
