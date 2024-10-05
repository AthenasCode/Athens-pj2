import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  buttonLink?: string; // Opcional si deseas mantener el enlace, pero no se usa para añadir al carrito
}

const Card: React.FC<CardProps> = ({ image, title, description, price, discountPrice }) => {
  const priceInCents = Math.round(price * 100);
  const discountPriceInCents = Math.round(discountPrice * 100);
  const discountPercentage = Math.round(((priceInCents - discountPriceInCents) / priceInCents) * 100);

  // Función para agregar al carrito
  const addToCart = () => {
    const existingCart = localStorage.getItem('cart'); // Obtener carrito de localStorage
    let cart = existingCart ? JSON.parse(existingCart) : []; // Parsear el carrito o iniciar uno vacío

    // Crear un nuevo producto para agregar al carrito
    const productToAdd = {
      title,
      image,
      description,
      originalPrice: price,
      discountedPrice: discountPrice,
      quantity: 1, // Cantidad predeterminada
    };

    // Verificar si el producto ya existe en el carrito
    const index = cart.findIndex((product: any) => product.title === title); // Cambiar a 'title' para buscar el producto
    if (index >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[index].quantity += 1;
    } else {
      // Si no está en el carrito, agregarlo
      cart.push(productToAdd);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Producto añadido al carrito: ${title}`);
    console.log('Carrito actualizado:', cart);
  };

  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <h1 className="card-title">{title}</h1>
      <p>{description}</p>
      <del>${price.toLocaleString()}</del>
      <h1 className="card-price">${discountPrice.toLocaleString()}</h1>
      <h4>{discountPercentage}%</h4>
      
      {/* Botón para añadir al carrito */}
      <button className="secondary" onClick={addToCart}>Añadir al carrito</button>
    </div>
  );
};

export default Card;
