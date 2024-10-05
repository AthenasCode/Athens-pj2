import  { useState, useEffect, useMemo, JSXElementConstructor, Key, ReactElement, ReactNode } from 'react';
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

  const handleQuantityChange = (productId: any, newQuantity: number) => {
    setCart((prevCart: any[]) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };



  // Nueva función para eliminar un producto del carrito
  const handleRemoveProduct = (productId: any) => {
    setCart((prevCart: any[]) => prevCart.filter((product) => product.id !== productId));
  };

  const subtotal = useMemo(() => {
    return cart.reduce(
      (acc: number, product: { discountedPrice: any; quantity: any; }) => acc + (product.discountedPrice || 0) * (product.quantity || 1),
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
              cart.map((product: { id: Key | null | undefined; category: any; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; discountedPrice: number; quantity: any; }) => (
                <div key={product.id} className="cart-item">
                  <div className="product-image">
                    <Link to={`/PDP?product=${product.id}&category=${product.category}`}>
                      <img src={product.image}  />
                    </Link>
                  </div>
                  <div className="product-info">
                    <h3>
                      <Link to={`/PDP?product=${product.id}&category=${product.category}`}>
                        {product.title}
                      </Link>
                    </h3>
                    <p>
                      Precio: $
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
        
    </Main>
  );
}