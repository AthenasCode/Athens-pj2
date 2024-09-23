import { ProductCardPropsType } from "../types/productcard.type";

export function ProductCard({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
}: ProductCardPropsType) {
  return (
    <div className="product">
      <a href="pdp.html">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Calificación: ★★★★☆ 4.5</p>
        <p>{description}</p>
        <p>Precio normal: ${originalPrice.toLocaleString()}</p>
        <p>Precio con descuento: ${discountedPrice.toLocaleString()}</p>
      </a>
      <button className="estilo">Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;