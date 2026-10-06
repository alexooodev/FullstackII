import { useState } from "react";

const ShoppingCart = () => {
  const [items] = useState(() => JSON.parse(localStorage.getItem("carrito")) || []);

  return (
    <div id="cart">
      <h2>Carrito</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} — ${item.price.toLocaleString("es-CL")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
