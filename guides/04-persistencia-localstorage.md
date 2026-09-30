# 04 — Persistencia con localStorage

Que el carrito no se pierda al recargar la página, guardándolo en `localStorage`.

## Pasos

1. En `src/components/ProductList.jsx`, el botón "Agregar al carrito" debe guardar el producto. Cambia `onAdd={() => {}}` por una función que lo agregue a `localStorage`:
   ```jsx
   const agregarAlCarrito = (producto) => {
     const carritoActual = JSON.parse(localStorage.getItem('carrito')) || []
     localStorage.setItem('carrito', JSON.stringify([...carritoActual, producto]))
   }
   ```
   y en el map:
   ```jsx
   <ProductCard name={p.name} price={p.price} onAdd={() => agregarAlCarrito(p)} />
   ```

2. En `src/components/ShoppingCart.jsx`, lee el carrito al montar el componente con `useState` + `useEffect`:
   ```jsx
   import { useState, useEffect } from 'react'

   const ShoppingCart = () => {
     const [items, setItems] = useState([])

     useEffect(() => {
       const guardado = JSON.parse(localStorage.getItem('carrito')) || []
       setItems(guardado)
     }, [])

     return (
       <div id="cart">
         <h2>Carrito</h2>
         <ul>
           {items.map((item, i) => (
             <li key={i}>{item.name} — ${item.price.toLocaleString('es-CL')}</li>
           ))}
         </ul>
       </div>
     )
   }

   export default ShoppingCart
   ```

   `useEffect` con `[]` corre una sola vez, al montar el componente — es el momento de leer lo guardado.

✅ **Checkpoint:** agrega un producto desde "Productos", ve a "Carrito" y ahí está. Refresca la página (F5) — sigue ahí. Revisa en DevTools → Application → Local Storage que exista la clave `carrito`.
