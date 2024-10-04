import React from 'react';

const Summary = ({ subtotal, shippingCost, discountBlackFriday, totalDiscounts, iva, total }) => {
  const formatNumber = (number) =>
    typeof number === 'number' && !isNaN(number) ? number.toLocaleString('es-ES') : '0';

  return (
    <aside className="summary">
      <h2>Resumen del Pedido</h2>
      <ul>
        <li>Subtotal: ${formatNumber(subtotal)}</li>
        <li>Valor Envío: ${formatNumber(shippingCost)}</li>
        <li>Descuento BlackFriday: -${formatNumber(discountBlackFriday)}</li>
        <li>Descuento Total: -${formatNumber(totalDiscounts)}</li>
        <li>Subtotal con Descuentos: ${formatNumber(subtotal - totalDiscounts)}</li>
        <li>IVA (19%): ${formatNumber(iva)}</li>
        <li>Total: ${formatNumber(total)}</li>
      </ul>
      <button className="secondary">Iniciar Pago</button>
    </aside>
  );
};

export default Summary;
