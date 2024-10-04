import React, { useState, useEffect, useMemo } from 'react';
import { Main } from '../layout/Main';
import { Link } from 'react-router-dom';
import Summary from '../components/Summary';

export function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleShippingChange = (productId, shippingOption) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, shippingOption } : product
      )
    );
  };

  // Nueva función para eliminar un producto del carrito
  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const subtotal = useMemo(() => {
    return cart.reduce(
      (acc, product) => acc + (product.discountedPrice || 0) * (product.quantity || 1),
      0
    );
  }, [cart]);

  const shippingCost = 10;
  const discountBlackFriday = 0;
  const totalDiscounts = discountBlackFriday;
  const iva = (subtotal - totalDiscounts) * 0.19;
  const total = subtotal - totalDiscounts + shippingCost + iva;

  return (
    <Main>
      {/* ... (código de navegación sin cambios) ... */}
      <div className="containercart">
        <section className="productscart">
          <h2>Tu Carrito</h2>
          <div className="products-list">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="product-image">
                    <Link to={`/PDP?product=${product.id}&category=${product.category}`}>
                      <img src={product.image} alt={product.title} />
                    </Link>
                  </div>
                  <div className="product-info">
                    <h3>
                      <Link to={`/PDP?product=${product.id}&category=${product.category}`}>
                        {product.title}
                      </Link>
                    </h3>
                    <p>
                      Precio con descuento: $
                      {product.discountedPrice
                        ? product.discountedPrice.toFixed(2)
                        : '0.00'}
                    </p>
                    {/* ... (opciones de envío sin cambios) ... */}
                    <div className="quantity-selector">
                      <label>Cantidad:</label>
                      <select
                        value={product.quantity || 1}
                        onChange={(e) =>
                          handleQuantityChange(product.id, parseInt(e.target.value))
                        }
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Nuevo botón de eliminar */}
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No tienes productos en el carrito.</p>
            )}
          </div>
        </section>

        {cart.length > 0 && (
          <Summary
            subtotal={subtotal}
            shippingCost={shippingCost}
            discountBlackFriday={discountBlackFriday}
            totalDiscounts={totalDiscounts}
            iva={iva}
            total={total}
          />
        )}
      </div>

      <style jsx>{`
        .containercart {
          display: flex;
          flex-wrap: wrap;
        }
        .productscart {
          flex: 1;
          padding: 10px;
        }
        .cart-item {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 15px;
        }
        .product-image img {
          max-width: 100px;
          margin-right: 15px;
        }
        .product-info {
          flex: 1;
        }
        .shipping-options {
          margin: 10px 0;
        }
        .shipping-options label {
          display: block;
          margin-bottom: 5px;
        }
        .quantity-selector {
          margin-top: 10px;
        }
        .remove-button {
          margin-top: 10px;
          padding: 5px 10px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }
        .remove-button:hover {
          background-color: #ff3333;
        }
      `}</style>
    </Main>
  );
}