import { Main } from "../layout/Main";
import Card from "../components/Card";
import { homepageItems } from "../utils/data";
export function Home() {
  return (
    <Main>
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
    </Main>
  );
}
