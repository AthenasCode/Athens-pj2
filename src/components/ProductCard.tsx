import React from 'react';
import { ProductCardPropsType } from '../types/productcard.type';

interface ProductCardPropsTypeWithLocalCart extends ProductCardPropsType {}

export function ProductCard({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
  category,
  productId, 
}: ProductCardPropsTypeWithLocalCart) {

  // Formato de precio
  const formatPrice = (price: number | undefined) => {
    return typeof price === 'number' && !isNaN(price) ? price.toLocaleString() : 'N/A';
  };

  // Función para agregar al carrito
  const addToCart = () => {
    const existingCart = localStorage.getItem('cart'); // Obtener carrito de localStorage
    let cart = existingCart ? JSON.parse(existingCart) : []; // Parsear el carrito o iniciar uno vacío

    // Crear un nuevo producto para agregar al carrito
    const productToAdd = {
      id: productId, 
      title,
      image,
      description,
      originalPrice,
      discountedPrice,
      category,
      quantity: 1, // Puedes personalizar la cantidad
    };

    // Verificar si el producto ya existe en el carrito
    const index = cart.findIndex((product: any) => product.id === productId); // Cambiar aquí a 'id'
    if (index >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[index].quantity += 1;
    } else {
      // Si no está en el carrito, agregarlo
      cart.push(productToAdd);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Producto añadido al carrito: ${title} (ID: ${productId})`);
    console.log('Carrito actualizado:', cart);
  };

  return (
    <div className="product">
      <a href={`/PDP?product=${productId}&category=${category}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Calificación: ★★★★☆ 4.5</p>
        <p>{description}</p>
        <p>Precio normal: ${formatPrice(originalPrice)}</p>
        <p>Precio con descuento: ${formatPrice(discountedPrice)}</p>
      </a>
      <button className="estilo" onClick={addToCart}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductCard;
