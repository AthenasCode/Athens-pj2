import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, price, discountPrice, buttonLink }) => {
  const priceInCents = Math.round(price * 100);
  const discountPriceInCents = Math.round(discountPrice * 100);
  const discountPercentage = Math.round(((priceInCents - discountPriceInCents) / priceInCents) * 100);
  
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <h1 className="card-title">{title}</h1>
      <p>{description}</p>
      <del>${price.toLocaleString()}</del>
      <h1 className="card-price">${discountPrice.toLocaleString()}</h1>
      <h4>{discountPercentage}%</h4>
      
        <button className="secondary"><a href={buttonLink}>Añadir al carrito</a></button>
      
    </div>
  );
};

export default Card;